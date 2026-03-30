import { Request, Response, NextFunction } from 'express';
import { prisma } from '../utils/prisma';
import * as userService from '../services/user.service';
import { getTier, getNextTier, getProgressToNextTier } from '../utils/loyalty.util';
import { 
  isBirthdayToday, 
  getBirthdayDiscount, 
  daysUntilBirthday, 
  getNextBirthday 
} from '../utils/birthday.util';

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        _count: {
          select: {
            bookings: { where: { status: 'PAID' } }
          }
        },
        bookings: {
          where: { status: 'PAID' },
          select: { total_amount: true }
        },
        loyalty_logs: {
          orderBy: { created_at: 'desc' },
          take: 5,
          select: {
            points: true,
            type: true,
            description: true,
            created_at: true,
          }
        }
      }
    });

    if (!user) {
      res.status(404).json({ success: false, message: 'User không tồn tại' });
      return;
    }

    // ✅ Lấy điểm THẬT từ DB (không tính lại)
    const realPoints = user.loyalty_points;  // đã sync ở Bước 1
    const realTier   = (user as any).loyalty_tier;

    // Tính tier info
    const TIERS = [
      { name: 'Đồng',      min: 0,     max: 999,   color: '#CD7F32', icon: '🥉', multiplier: 1.0 },
      { name: 'Bạc',       min: 1000,  max: 4999,  color: '#C0C0C0', icon: '🥈', multiplier: 1.2 },
      { name: 'Vàng',      min: 5000,  max: 9999,  color: '#FFD700', icon: '🥇', multiplier: 1.5 },
      { name: 'Kim cương', min: 10000, max: Infinity, color: '#B9F2FF', icon: '💎', multiplier: 2.0 },
    ];

    const currentTier = TIERS.find(t =>
      realPoints >= t.min && realPoints <= t.max
    ) ?? TIERS[0];

    const currentIdx  = TIERS.indexOf(currentTier);
    const nextTier    = TIERS[currentIdx + 1] ?? null;

    const progress = nextTier
      ? Math.floor(
          ((realPoints - currentTier.min) /
          (nextTier.min - currentTier.min)) * 100
        )
      : 100;

    const totalSpent = user.bookings.reduce(
      (sum, b) => sum + Number(b.total_amount), 0
    );

    res.status(200).json({
      success: true,
      data: {
        id:            user.id,
        name:          user.name,
        email:         user.email,
        phone:         user.phone,
        avatar_url:    user.avatar_url,
        birthday:      user.date_of_birth,
        created_at:    user.created_at,

        // ✅ Điểm và hạng THẬT từ DB
        loyalty_points: realPoints,
        loyalty_tier:   realTier,

        tier_info: {
          name:        currentTier.name,
          color:       currentTier.color,
          icon:        currentTier.icon,
          multiplier:  currentTier.multiplier,
          perks:       getPerksByTier(currentTier.name),
        },
        next_tier: nextTier ? {
          name:      nextTier.name,
          minPoints: nextTier.min,
          color:     nextTier.color,
          icon:      nextTier.icon,
        } : null,

        progress_to_next:    progress,
        points_to_next_tier: nextTier
          ? nextTier.min - realPoints
          : 0,

        // Thống kê thật
        stats: {
          total_bookings: user._count.bookings,
          total_spent:    totalSpent,
          loyalty_points: realPoints,
        },

        // Lịch sử điểm gần nhất
        recent_logs: user.loyalty_logs,
      }
    });
  } catch (error) {
    next(error);
  }
};

function getPerksByTier(tier: string): string[] {
  const perks: Record<string, string[]> = {
    'Đồng':      ['Tích 1 điểm / 10.000đ', 'Ưu đãi sinh nhật 10%'],
    'Bạc':       ['Tích 1.2 điểm / 10.000đ', 'Ưu đãi sinh nhật 15%', 'Ưu tiên chọn ghế sớm'],
    'Vàng':      ['Tích 1.5 điểm / 10.000đ', 'Ưu đãi sinh nhật 20%', 'Miễn phí 1 bắp/tháng'],
    'Kim cương': ['Tích 2 điểm / 10.000đ', 'Ưu đãi sinh nhật 30%', 'Miễn phí 2 bắp/tháng'],
  };
  return perks[tier] ?? perks['Đồng'];
}

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const profile = await userService.updateProfile(userId, req.body);
    res.json(profile);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateAvatar = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.userId;

    if (!req.file) {
      res.status(400).json({
        success: false,
        message: 'Vui lòng chọn ảnh'
      });
      return;
    }

    // Tạo URL từ file đã lưu local bởi multer diskStorage
    const protocol = req.protocol;
    const host = req.get('host');
    const avatarUrl = `${protocol}://${host}/uploads/avatars/${req.file.filename}`;

    // Cập nhật DB
    await prisma.user.update({
      where: { id: userId },
      data: { avatar_url: avatarUrl }
    });

    res.status(200).json({
      success: true,
      message: 'Cập nhật ảnh thành công',
      data: { avatar_url: avatarUrl }
    });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const result = await userService.changePassword(userId, req.body);
    res.json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getLoyaltySummary = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const summary = await userService.getLoyaltySummary(userId);
    res.json(summary);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getLoyaltyHistory = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const page = parseInt(req.query.page as string) || 1;
    const result = await userService.getLoyaltyHistory(userId, page);

    res.status(200).json({
      success: true,
      data: result.logs,
      summary: result.summary,
      pagination: result.pagination,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getBirthdayStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user!.userId;
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        date_of_birth: true,
        loyalty_tier: true,
        name: true,
      }
    });

    if (!user?.date_of_birth) {
      res.status(200).json({
        success: true,
        data: {
          has_birthday: false,
          is_birthday_today: false,
          message: 'Chưa cập nhật ngày sinh nhật',
        }
      });
      return;
    }

    const isToday   = isBirthdayToday(user.date_of_birth);
    const discount  = getBirthdayDiscount(user.loyalty_tier ?? 'Đồng');
    const daysUntil = daysUntilBirthday(user.date_of_birth);

    res.status(200).json({
      success: true,
      data: {
        has_birthday:        true,
        birthday:            user.date_of_birth,
        is_birthday_today:   isToday,
        discount_percent:    discount,
        days_until_birthday: daysUntil,
        next_birthday:       getNextBirthday(user.date_of_birth),
        message: isToday
          ? `🎂 Chúc mừng sinh nhật ${user.name}! Bạn được giảm ${discount}% hôm nay!`
          : daysUntil <= 7
            ? `🎉 Còn ${daysUntil} ngày đến sinh nhật của bạn!`
            : null,
      }
    });
  } catch (error) {
    next(error);
  }
};
