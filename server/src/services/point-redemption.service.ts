import { prisma } from '../utils/prisma';
import { POINT_PACKAGES } from '../config/point-exchange.config';
import { AppError } from '../utils/AppError';
import dayjs from 'dayjs';

// Lấy danh sách gói đổi điểm kèm trạng thái user
export const getPackages = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where:  { id: userId },
    select: { loyalty_points: true, loyalty_tier: true }
  });

  const currentPoints = user?.loyalty_points ?? 0;

  return POINT_PACKAGES.map(pkg => ({
    ...pkg,
    can_redeem:     currentPoints >= pkg.points_required,
    points_short:   Math.max(0, pkg.points_required - currentPoints),
    current_points: currentPoints,
  }));
};

// Đổi điểm lấy voucher
export const redeemPoints = async (
  userId:    string,
  packageId: string
): Promise<{ voucher_code: string; discount_value: number; expires_at: Date; discount_type: string }> => {

  // 1. Tìm gói
  const pkg = POINT_PACKAGES.find(p => p.id === packageId);
  if (!pkg) throw new AppError('Gói đổi điểm không tồn tại', 404);

  // 2. Kiểm tra điểm
  const user = await prisma.user.findUnique({
    where:  { id: userId },
    select: { loyalty_points: true, name: true }
  });
  if (!user) throw new AppError('User không tồn tại', 404);

  if (user.loyalty_points < pkg.points_required) {
    throw new AppError(
      `Không đủ điểm. Cần ${pkg.points_required} điểm, ` +
      `bạn có ${user.loyalty_points} điểm ` +
      `(thiếu ${pkg.points_required - user.loyalty_points} điểm)`,
      400
    );
  }

  // 3. Tạo code voucher duy nhất
  const timestamp = Date.now().toString(36).toUpperCase();
  const code      = `PT${pkg.points_required}_${userId.slice(0,4).toUpperCase()}_${timestamp}`;

  const expiresAt = dayjs().add(pkg.validity_days, 'day').toDate();

  // 4. Dùng transaction — trừ điểm + tạo voucher + ghi log
  await prisma.$transaction(async (tx) => {

    // Trừ điểm
    await tx.user.update({
      where: { id: userId },
      data:  { loyalty_points: { decrement: pkg.points_required } }
    });

    // Tạo voucher riêng cho user này
    const voucher = await tx.voucher.create({
      data: {
        code,
        discount_type:  pkg.discount_type,
        discount_value: pkg.discount_value,
        min_amount:     pkg.min_amount,
        max_discount:   pkg.max_discount ?? pkg.discount_value,
        usage_limit:    1,           // dùng 1 lần
        used_count:     0,
        description:    `${pkg.icon} Đổi ${pkg.points_required} điểm - ${pkg.description}`,
        expires_at:     expiresAt,
        is_active:      true,
        source:         'POINT_REDEMPTION',
        owner_user_id:  userId,      // chỉ user này dùng được
      }
    });

    // Ghi log trừ điểm
    await tx.loyaltyLog.create({
      data: {
        user_id:     userId,
        points:      -pkg.points_required,   // âm = trừ điểm
        type:        'REDEEM',
        description: `${pkg.icon} Đổi điểm lấy voucher ${code}`,
      }
    });

    // Lưu lịch sử đổi điểm
    await tx.pointRedemption.create({
      data: {
        user_id:    userId,
        points_used: pkg.points_required,
        voucher_id: voucher.id,
      }
    });
  });

  return {
    voucher_code:   code,
    discount_value: pkg.discount_value,
    discount_type:  pkg.discount_type,
    expires_at:     expiresAt,
  };
};

// Lấy danh sách voucher do đổi điểm của user
export const getMyRedemptionVouchers = async (userId: string) => {
  const now = new Date();

  const vouchers = await prisma.voucher.findMany({
    where: {
      owner_user_id: userId,
      source:        'POINT_REDEMPTION',
    },
    orderBy: { created_at: 'desc' },
  });

  return vouchers.map(v => ({
    ...v,
    is_expired:  v.expires_at < now,
    is_used:     v.used_count >= v.usage_limit,
    is_valid:    v.is_active && v.expires_at >= now && v.used_count < v.usage_limit,
    days_left:   Math.max(0, dayjs(v.expires_at).diff(dayjs(), 'day')),
  }));
};

// Lấy lịch sử đổi điểm
export const getRedemptionHistory = async (userId: string) => {
  const redemptions = await prisma.pointRedemption.findMany({
    where:   { user_id: userId },
    orderBy: { created_at: 'desc' },
    include: {
      voucher: {
        select: {
          code:           true,
          discount_type:  true,
          discount_value: true,
          expires_at:     true,
          used_count:     true,
          usage_limit:    true,
          is_active:      true,
        }
      }
    }
  });

  const now = new Date();
  return redemptions.map(r => ({
    id:          r.id,
    points_used: r.points_used,
    created_at:  r.created_at,
    voucher: r.voucher ? {
      code:           r.voucher.code,
      discount_type:  r.voucher.discount_type,
      discount_value: r.voucher.discount_value,
      expires_at:     r.voucher.expires_at,
      is_used:        r.voucher.used_count >= r.voucher.usage_limit,
      is_expired:     r.voucher.expires_at < now,
      is_valid:       r.voucher.is_active && r.voucher.expires_at >= now && r.voucher.used_count < r.voucher.usage_limit,
    } : null,
  }));
};
