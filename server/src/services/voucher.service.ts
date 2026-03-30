import { prisma } from '../utils/prisma';
import { AppError } from '../utils/AppError';
import { DiscountType } from '../generated/client';

export const validateVoucher = async (code: string, amount: number, userId: string) => {
  // 1. Tìm voucher theo code
  const voucher = await prisma.voucher.findUnique({
    where: { code }
  });

  if (!voucher) {
    throw new AppError('Mã giảm giá không tồn tại', 404);
  }

  // 2. Kiểm tra is_active
  if (!voucher.is_active) {
    throw new AppError('Mã giảm giá không còn hiệu lực', 400);
  }

  // 3. Kiểm tra expires_at > now()
  if (voucher.expires_at < new Date()) {
    throw new AppError('Mã giảm giá đã hết hạn', 400);
  }

  // 4. Kiểm tra used_count < usage_limit
  if (voucher.used_count >= voucher.usage_limit) {
    throw new AppError('Mã giảm giá đã được sử dụng hết', 400);
  }

  // 5. Kiểm tra amount >= min_amount
  if (amount < voucher.min_amount) {
    throw new AppError(`Đơn hàng tối thiểu ${voucher.min_amount.toLocaleString('vi-VN')}đ để dùng mã này`, 400);
  }

  // 6. Kiểm tra user chưa dùng code này:
  const used = await prisma.booking.findFirst({
    where: { 
      user_id: userId, 
      voucher_code: code, 
      status: 'PAID' 
    }
  });

  if (used) {
    throw new AppError('Bạn đã sử dụng mã này trước đó', 400);
  }

  // 7. Tính discount_amount:
  let discount_amount = 0;
  if (voucher.discount_type === DiscountType.PERCENT) {
    discount_amount = Math.floor(amount * voucher.discount_value / 100);
    if (voucher.max_discount) {
      discount_amount = Math.min(discount_amount, voucher.max_discount);
    }
  } else {
    discount_amount = Math.min(voucher.discount_value, amount);
  }

  // 8. Trả về
  return {
    code: voucher.code,
    discount_type: voucher.discount_type,
    discount_value: voucher.discount_value,
    discount_amount,
    final_amount: amount - discount_amount,
    description: voucher.description,
    message: `Áp dụng thành công! Giảm ${discount_amount.toLocaleString('vi-VN')}đ`
  };
};

export const getAvailableVouchers = async (userId: string, amount: number) => {
  // Lấy tất cả voucher còn hiệu lực
  const vouchers = await prisma.voucher.findMany({
    where: {
      is_active: true,
      expires_at: { gt: new Date() },
      used_count: { lt: prisma.voucher.fields.usage_limit as any } // Workaround, but using findMany then filter is easier if small
    }
  });
  
  // Alternative since prisma expressions can be tricky:
  const activeVouchers = await prisma.voucher.findMany({
    where: {
      is_active: true,
      expires_at: { gt: new Date() }
    }
  });

  const availableVouchers = [];

  for (const voucher of activeVouchers) {
    // Check usage limit
    if (voucher.used_count >= voucher.usage_limit) continue;

    // Check if user already used it
    const used = await prisma.booking.findFirst({
      where: { user_id: userId, voucher_code: voucher.code, status: 'PAID' }
    });
    if (used) continue;

    // Calculate discount for current amount
    let discount_amount = 0;
    if (voucher.discount_type === DiscountType.PERCENT) {
      discount_amount = Math.floor(amount * voucher.discount_value / 100);
      if (voucher.max_discount) discount_amount = Math.min(discount_amount, voucher.max_discount);
    } else {
      discount_amount = Math.min(voucher.discount_value, amount);
    }

    const is_applicable = amount >= voucher.min_amount;

    availableVouchers.push({
      ...voucher,
      discount_amount,
      is_applicable,
      reason: is_applicable ? null : `Cần thêm ${(voucher.min_amount - amount).toLocaleString('vi-VN')}đ`
    });
  }

  // Sort: voucher giảm nhiều nhất lên đầu
  return availableVouchers.sort((a, b) => b.discount_amount - a.discount_amount);
};
