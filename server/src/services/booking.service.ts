import { prisma } from '../utils/prisma';
import { BookingStatus, Role } from '@prisma/client';
import { calculatePoints, getTier } from '../utils/loyalty.util';
import { 
  isBirthdayPeriod, 
  calculateBirthdayDiscount, 
  getBirthdayDiscount 
} from '../utils/birthday.util';
import { generateQRToken, generateQRImage } from '../utils/qr.util';
import { sendBookingConfirmation } from './email.service';
import { AppError } from '../utils/AppError';
import * as voucherService from './voucher.service';

interface CreateBookingData {
  userId: string;
  showtimeId: string;
  seatIds: string[];
  foodItems?: { comboId: string; quantity: number }[];
  voucherCode?: string;
}

interface ConfirmPaymentData {
  bookingId: string;
  transactionId: string;
}

// Mock data for seat types - in a real app this would come from the database
type SeatType = 'STANDARD' | 'VIP' | 'COUPLE' | 'DISABLED';

export const createBooking = async (data: CreateBookingData) => {
  // BƯỚC 1 - Validate đầu vào
  const showtime = await prisma.showtime.findUnique({
    where: { id: data.showtimeId },
    include: { room: { include: { seats: true } } }
  });

  if (!showtime) {
    throw new AppError('Suất chiếu không tồn tại', 400);
  }

  if (!data.seatIds || data.seatIds.length === 0 || data.seatIds.length > 8) {
    throw new AppError('Vui lòng chọn từ 1-8 ghế', 400);
  }

  // Huỷ đơn PENDING cũ của chính user trên cùng suất chiếu (để cho phép retry)
  const existingPending = await prisma.booking.findFirst({
    where: {
      user_id: data.userId,
      showtime_id: data.showtimeId,
      status: 'PENDING',
    }
  });
  if (existingPending) {
    await prisma.booking.update({
      where: { id: existingPending.id },
      data: { status: 'CANCELLED' }
    });
  }

  // BƯỚC 2 - Kiểm tra ghế có available không
  for (const seatId of data.seatIds) {
    const seat = await prisma.seat.findUnique({
      where: { id: seatId }
    });

    if (!seat) {
      throw new AppError(`Ghế ${seatId} không tồn tại`, 400);
    }

    // Check if seat belongs to the room
    if (seat.room_id !== showtime.room_id) {
      throw new AppError(`Ghế ${seatId} không thuộc phòng này`, 400);
    }
    
    // Check if seat is already booked (PAID, or actively PENDING and not expired)
    const conflictingBooking = await prisma.bookingItem.findFirst({
      where: {
        showtime_id: data.showtimeId,
        seat_id: seatId,
        booking: {
          OR: [
            { status: 'PAID' },
            {
              status: 'PENDING',
              expires_at: { gt: new Date() } // chỉ chặn PENDING chưa hết hạn
            }
          ]
        }
      }
    });

    if (conflictingBooking) {
      throw new AppError(`Ghế ${seat.row}${seat.col} đã có người đặt`, 400);
    }
  }

  // BƯỚC 3 - Tính giá
  const showtimeData = await prisma.showtime.findUnique({
    where: { id: data.showtimeId }
  });

  if (!showtimeData) {
    throw new AppError('Suất chiếu không tồn tại', 400);
  }

  // Calculate seat prices
  let seatTotal = 0;
  const seatPrices: Record<string, number> = {};

  // Get seat types from the database
  const seats = await prisma.seat.findMany({
    where: { id: { in: data.seatIds } }
  });

  for (const seat of seats) {
    const seatType: SeatType = seat.type as SeatType || 'STANDARD';
    switch (seatType) {
      case 'STANDARD':
        seatTotal += showtimeData.price;
        seatPrices[seat.id] = showtimeData.price;
        break;
      case 'VIP':
        seatTotal += showtimeData.vip_price;
        seatPrices[seat.id] = showtimeData.vip_price;
        break;
      case 'COUPLE':
        seatTotal += showtimeData.couple_price;
        seatPrices[seat.id] = showtimeData.couple_price;
        break;
      case 'DISABLED':
        throw new AppError('Không thể đặt ghế DISABLED', 400);
    }
  }

  // Calculate food total
  let foodTotal = 0;
  if (data.foodItems && data.foodItems.length > 0) {
    for (const foodItem of data.foodItems) {
      const combo = await prisma.foodCombo.findUnique({
        where: { id: foodItem.comboId }
      });
      if (combo) {
        foodTotal += combo.price * foodItem.quantity;
      }
    }
  }

  const subtotal = seatTotal + foodTotal;

  // BƯỚC 4 - Áp dụng voucher và ưu đãi sinh nhật
  // 4.1. Tính voucher discount
  let voucherDiscount = 0;
  let usedVoucherCode = null;

  if (data.voucherCode) {
    const voucherResult = await voucherService.validateVoucher(
      data.voucherCode,
      subtotal,
      data.userId
    );
    voucherDiscount = voucherResult.discount_amount;
    usedVoucherCode = data.voucherCode;
  }

  // 4.2. Tính ưu đãi sinh nhật
  const { isBirthdayPeriod, calculateBirthdayDiscount, getBirthdayDiscount } = await import('../utils/birthday.util');
  let birthdayDiscount = 0;
  const user = await prisma.user.findUnique({
    where: { id: data.userId },
    select: { 
      date_of_birth: true, 
      loyalty_tier: true,
      name: true,
      email: true,
      phone: true,
      id: true,
      password_hash: true,
      avatar_url: true,
      role: true,
      loyalty_points: true,
      refresh_token: true,
      is_verified: true,
      created_at: true,
      updated_at: true,
    } as any
  });

  const u = user as any;
  if (u?.date_of_birth && isBirthdayPeriod(u.date_of_birth)) {
    birthdayDiscount = calculateBirthdayDiscount(
      subtotal,
      u.loyalty_tier || 'Đồng'
    );
  }

  // Tổng discount: Chọn cái lớn nhất giữa voucher và sinh nhật
  const totalDiscount = Math.max(voucherDiscount, birthdayDiscount);
  const totalAmount = subtotal - totalDiscount;

  // BƯỚC 5 - Tạo booking trong DB
  // Generate QR token
  const qrToken = generateQRToken({
    id: 'temp_id', // This will be replaced with actual ID after creation
    userId: data.userId,
    showtimeId: data.showtimeId
  });

  // Create booking with transaction
  const booking = await prisma.$transaction(async (tx) => {
    // 1. Create booking record
    const booking = await tx.booking.create({
      data: {
        user_id: data.userId,
        showtime_id: data.showtimeId,
        status: 'PENDING',
        total_amount: totalAmount,
        discount_amount: totalDiscount,
        voucher_code: usedVoucherCode,
        qr_code: qrToken,
        expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
      }
    });

    // 2. Create booking items (log birthday discount if applied)
    if (birthdayDiscount > 0 && totalDiscount === birthdayDiscount) {
      await (tx as any).loyaltyLog.create({
        data: {
          user_id: data.userId,
          points: 0,
          type: 'EARN',
          description: `🎂 Ưu đãi sinh nhật -${getBirthdayDiscount(u.loyalty_tier)}%`,
          booking_id: booking.id,
        }
      });
    }

    // 2. Create booking items
    for (const seatId of data.seatIds) {
      const price = seatPrices[seatId] || 0;
      await tx.bookingItem.create({
        data: {
          booking_id: booking.id,
          seat_id: seatId,
          price: price,
          showtime_id: data.showtimeId
        }
      });
    }

    // 3. Create food items
    if (data.foodItems && data.foodItems.length > 0) {
      for (const foodItem of data.foodItems) {
        const combo = await tx.foodCombo.findUnique({
          where: { id: foodItem.comboId }
        });
        if (combo) {
          await tx.foodItem.create({
            data: {
              booking_id: booking.id,
              combo_id: foodItem.comboId,
              quantity: foodItem.quantity,
              price: combo.price
            }
          });
        }
      }
    }

    // 4. Create payment record
    await tx.payment.create({
      data: {
        booking_id: booking.id,
        method: 'VNPAY',
        amount: totalAmount,
        status: 'PENDING'
      }
    });

    return booking;
  });

  // BƯỚC 6 - Tạo QR token và lưu
  const updatedQrToken = generateQRToken({
    id: booking.id,
    userId: data.userId,
    showtimeId: data.showtimeId
  });

  await prisma.booking.update({
    where: { id: booking.id },
    data: { qr_code: updatedQrToken }
  });

  // Return booking details
  const bookingDetails = await prisma.booking.findUnique({
    where: { id: booking.id },
    include: {
      showtime: {
        include: {
          movie: true,
          room: true
        }
      },
      booking_items: {
        include: {
          seat: true
        }
      },
      food_items: {
        include: {
          combo: true
        }
      },
      payment: true
    }
  });

  return bookingDetails;
};

export const createPaymentUrl = async (bookingId: string, ipAddr: string) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      showtime: {
        include: {
          movie: true
        }
      }
    }
  });

  if (!booking || booking.status !== 'PENDING') {
    throw new AppError('Booking không hợp lệ', 400);
  }

  const { createPaymentUrl } = await import('../utils/vnpay.util');
  const paymentUrl = createPaymentUrl({
    bookingId,
    amount: booking.total_amount,
    orderInfo: `Thanh toan ve phim ${booking.showtime.movie.title}`,
    ipAddr,
  });

  return paymentUrl;
};

export const getBookingById = async (bookingId: string, userId: string) => {
  const booking = await prisma.booking.findUnique({
    where: {
      id: bookingId,
      user_id: userId
    },
    include: {
      showtime: {
        include: {
          movie: true,
          room: {
            include: {
              cinema: true
            }
          }
        }
      },
      booking_items: {
        include: {
          seat: true
        }
      },
      food_items: {
        include: {
          combo: true
        }
      },
      payment: true
    }
  });

  if (!booking) {
    throw new AppError('Booking không tồn tại', 404);
  }

  return booking;
};

export const getUserBookings = async (userId: string) => {
  const bookings = await prisma.booking.findMany({
    where: { user_id: userId },
    include: {
      showtime: {
        include: {
          movie: {
            select: {
              title: true,
              poster_url: true,
              duration: true,
            }
          },
          room: {
            include: {
              cinema: {
                select: {
                  name: true,
                  address: true,
                }
              }
            }
          }
        }
      },
      booking_items: {
        include: {
          seat: {
            select: {
              row: true,
              col: true,
              type: true,
            }
          }
        }
      },
      food_items: {
        include: {
          combo: {
            select: {
              name: true,
              price: true,
            }
          }
        }
      },
      payment: true,
    },
    orderBy: {
      created_at: 'desc'
    }
  });

  return bookings;
};

export const handleVNPayReturn = async (query: Record<string, string>) => {
  const { verifyReturnUrl } = await import('../utils/vnpay.util');
  const verificationResult = verifyReturnUrl(query);

  if (!verificationResult.isValid) {
    return { success: false, message: 'Chữ ký không hợp lệ' };
  }

  const bookingId = verificationResult.bookingId;
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId }
  });

  if (verificationResult.responseCode !== '00') {
    if (booking) {
      await prisma.booking.update({
        where: { id: bookingId },
        data: { status: 'CANCELLED' }
      });
    }
    return { success: false, message: 'Thanh toán thất bại', bookingId };
  }

  if (booking && booking.status === 'PENDING') {
    await confirmPayment({
      bookingId,
      transactionId: query.vnp_TransactionNo || ''
    });
  }

  return { success: true, bookingId };
};

export const handleVNPayIPN = async (body: Record<string, any>) => {
  const { verifyIPN } = await import('../utils/vnpay.util');
  const verificationResult = verifyIPN(body);

  if (!verificationResult.isValid) {
    return { RspCode: '97', Message: 'Invalid signature' };
  }

  const bookingId = verificationResult.bookingId;
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId }
  });

  if (!booking) {
    return { RspCode: '01', Message: 'Order not found' };
  }

  if (booking.status === 'PAID') {
    return { RspCode: '02', Message: 'Order already confirmed' };
  }

  if (verificationResult.responseCode === '00') {
    try {
      await confirmPayment({
        bookingId,
        transactionId: body.vnp_TransactionNo
      });
      return { RspCode: '00', Message: 'Confirm success' };
    } catch (error) {
      return { RspCode: '00', Message: 'Confirm success' };
    }
  }

  return { RspCode: '00', Message: 'Confirm success' };
};

export const confirmPayment = async (data: ConfirmPaymentData) => {
  const { bookingId, transactionId } = data;

  // Update booking and payment status in one atomic transaction
  const updatedBooking = await prisma.$transaction(async (tx) => {
    // 1. Update booking: status = 'PAID', paidAt = now()
    const booking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: 'PAID',
        paid_at: new Date(),
      },
      include: {
        booking_items: { include: { seat: true } },
      },
    });

    // 2. Update payment: status = 'SUCCESS', transactionId
    await tx.payment.updateMany({
      where: { booking_id: bookingId },
      data: {
        status: 'SUCCESS',
        transaction_id: transactionId,
      },
    });

    // 2.1. Cập nhật số lần dùng voucher
    if (booking.voucher_code) {
      await tx.voucher.update({
        where: { code: booking.voucher_code },
        data: { used_count: { increment: 1 } }
      });
    }

    // 3. Tích điểm và cập nhật hạng (Loyalty)
    const user = await tx.user.findUnique({
      where: { id: booking.user_id },
      select: { loyalty_tier: true, loyalty_points: true }
    });

    // Tính điểm dựa trên hạng
    const MULTIPLIERS: Record<string, number> = {
      'Đồng':      1.0,
      'Bạc':       1.2,
      'Vàng':      1.5,
      'Kim cương': 2.0,
    };
    const multiplier   = MULTIPLIERS[user?.loyalty_tier ?? 'Đồng'] ?? 1.0;
    const basePoints   = Math.floor(Number(booking.total_amount) / 10000);
    const earnedPoints = Math.floor(basePoints * multiplier);

    if (earnedPoints > 0) {
      // Cộng điểm
      const updatedUser = await tx.user.update({
        where: { id: booking.user_id },
        data: {
          loyalty_points: { increment: earnedPoints }
        },
        select: { loyalty_points: true }
      });

      // Cập nhật tier mới nếu đủ điểm
      const newPoints = updatedUser.loyalty_points;
      let newTier = 'Đồng';
      if (newPoints >= 10000)     newTier = 'Kim cương';
      else if (newPoints >= 5000) newTier = 'Vàng';
      else if (newPoints >= 1000) newTier = 'Bạc';

      if (newTier !== user?.loyalty_tier) {
        await tx.user.update({
          where: { id: booking.user_id },
          data: { loyalty_tier: newTier }
        });
      }

      // Ghi LoyaltyLog
      await (tx as any).loyaltyLog.create({
        data: {
          user_id:    booking.user_id,
          points:     earnedPoints,
          type:       'EARN',
          description: `Đặt vé phim - Tích ${earnedPoints} điểm`,
          booking_id: booking.id,
        }
      });

      console.log('[LOYALTY] Cộng', earnedPoints, 'điểm cho user:', booking.user_id);
    }

    return booking;
  });

  // Fetch booking with full details for email
  const bookingWithDetails = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      showtime: {
        include: {
          movie: {
            select: {
              title: true,
              poster_url: true,
              duration: true,
            }
          },
          room: {
            include: {
              cinema: {
                select: {
                  name: true,
                  address: true,
                }
              }
            }
          }
        }
      },
      booking_items: {
        include: {
          seat: {
            select: {
              row: true,
              col: true,
              type: true,
            }
          }
        }
      },
      food_items: {
        include: {
          combo: {
            select: {
              name: true,
              price: true,
            }
          }
        }
      },
      user: {
        select: {
          name: true,
          email: true,
        }
      }
    }
  });

  if (!bookingWithDetails) {
    throw new AppError('Booking not found after confirmation', 404);
  }

  // Generate QR image
  const { generateQRImage } = await import('../utils/qr.util');
  const qrImageUrl = await generateQRImage(bookingWithDetails.qr_code);

  // Update booking with QR image
  await prisma.booking.update({
    where: { id: bookingId },
    data: {
      qr_image_url: qrImageUrl
    }
  });

  // Send email confirmation
  try {
    await sendBookingConfirmation(bookingWithDetails);
    console.log('[EMAIL] Gửi email thành công');
  } catch (emailError: any) {
    // QUAN TRỌNG: không throw, chỉ log
    console.error('[EMAIL] Lỗi gửi email (không ảnh hưởng booking):', emailError.message);
  }

  return bookingWithDetails;
};

export const cancelExpiredBookings = async () => {
  const expiredBookings = await prisma.booking.findMany({
    where: {
      status: 'PENDING',
      expires_at: {
        lt: new Date()
      }
    }
  });

  let count = 0;
  for (const booking of expiredBookings) {
    await prisma.$transaction(async (tx) => {
      // 1. Update status = 'EXPIRED'
      await tx.booking.update({
        where: { id: booking.id },
        data: { status: 'EXPIRED' }
      });

      // 2. Update payment status = 'FAILED' (dùng updateMany để không throw nếu không có payment)
      await tx.payment.updateMany({
        where: {
          booking_id: booking.id
        },
        data: {
          status: 'FAILED'
        }
      });
    });
    count++;
  }

  return count;
};