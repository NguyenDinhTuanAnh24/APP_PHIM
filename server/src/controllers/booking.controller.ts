import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import { createBookingSchema } from '../validators/booking.validator';

// Service imports
import {
  createBooking,
  getBookingById,
  getUserBookings
} from '../services/booking.service';

export const createBookingController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate request body
    createBookingSchema.parse(req.body);

    // Add userId to the data
    const bookingData = {
      ...req.body,
      userId: req.user!.userId
    };

    const result = await createBooking(bookingData);
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const createPaymentUrlController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get the client IP address
    let ipAddr: string;
    if (req.headers['x-forwarded-for']) {
      // Handle x-forwarded-for which can be an array
      const forwarded = req.headers['x-forwarded-for'];
      ipAddr = Array.isArray(forwarded) ? forwarded[0] : forwarded.split(/,/)[0];
    } else {
      ipAddr = req.ip || req.socket.remoteAddress || '';
    }

    const bookingId = req.params.id as string;
    const { createPaymentUrl } = await import('../services/payment.service');
    const result = await createPaymentUrl(bookingId, ipAddr);
    res.json({ paymentUrl: result });
  } catch (error) {
    next(error);
  }
};

export const getBookingByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getBookingById(req.params.id as string, req.user!.userId);
    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

export const getUserBookingsController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.userId;
    console.log('[BOOKINGS/MY] userId:', userId);

    const bookings = await prisma.booking.findMany({
      where:   { user_id: userId },
      orderBy: { created_at: 'desc' },
      include: {
        showtime: {
          include: {
            movie: {
              select: {
                title:       true,
                poster_url:  true,
                duration:    true,
                backdrop_url: true,
              }
            },
            room: {
              include: {
                cinema: {
                  select: {
                    name:    true,
                    address: true,
                    city:    true,
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
                row:  true,
                col:  true,
                type: true,
              }
            }
          }
        },
        food_items: {
          include: {
            combo: {
              select: {
                name:  true,
                price: true,
              }
            }
          }
        },
        payment: true,
      }
    });

    console.log('[BOOKINGS] Found:', bookings.length, 'bookings');

    res.status(200).json({
      success: true,
      data:    bookings,
      total:   bookings.length,
    });
  } catch (error) {
    console.error('[BOOKINGS] Error:', error);
    next(error);
  }
};


export const vnpayReturnController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { buildRedirectPage } = await import('../utils/redirect-page.util');

    // Convert query parameters to string record
    const queryParams: Record<string, string> = {};
    for (const [key, value] of Object.entries(req.query)) {
      if (value !== undefined) {
        queryParams[key] = String(Array.isArray(value) ? value[0] : value);
      }
    }

    const { handleVNPayReturn } = await import('../services/payment.service');
    const result = await handleVNPayReturn(queryParams);

    if (result.success) {
      // Trả về HTML đếm ngược thành công
      res.send(buildRedirectPage({
        success: true,
        message: 'Thanh toán thành công!',
        subMessage: 'Ứng dụng sẽ tự động mở sau',
        deepLink: `movieapp://payment/success?bookingId=${result.bookingId}`,
      }));
    } else if ((result as any).reason === 'invalid_signature') {
      res.send(buildRedirectPage({
        success: false,
        message: 'Chữ ký không hợp lệ',
        subMessage: 'Ứng dụng sẽ tự động mở sau',
        deepLink: 'movieapp://payment/failed?reason=invalid_signature',
      }));
    } else {
      const code = (result as any).code || '';
      res.send(buildRedirectPage({
        success: false,
        message: 'Thanh toán thất bại',
        subMessage: 'Ứng dụng sẽ tự động mở sau',
        deepLink: `movieapp://payment/failed?bookingId=${result.bookingId}&code=${code}`,
      }));
    }
  } catch (error: any) {
    console.error('[VNPAY RETURN] Error:', error.message);
    const { buildRedirectPage } = await import('../utils/redirect-page.util');
    res.send(buildRedirectPage({
      success: false,
      message: 'Có lỗi xảy ra',
      subMessage: 'Ứng dụng sẽ tự động mở sau',
      deepLink: 'movieapp://payment/failed?reason=server_error',
    }));
  }
};

export const vnpayIPNController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // VNPay IPN có thể gửi params qua query string (GET) hoặc body (POST)
    const ipnData: Record<string, string> = {};
    const combined = { ...req.query, ...req.body };
    for (const [key, value] of Object.entries(combined)) {
      if (value !== undefined) {
        ipnData[key] = String(Array.isArray(value) ? value[0] : value);
      }
    }

    const { handleVNPayIPN } = await import('../services/payment.service');
    const result = await handleVNPayIPN(ipnData);
    res.status(200).json(result);
  } catch (error) {
    console.error('[VNPAY IPN] Unhandled error:', error);
    res.status(200).json({ RspCode: '99', Message: 'Unknown error' });
  }
};