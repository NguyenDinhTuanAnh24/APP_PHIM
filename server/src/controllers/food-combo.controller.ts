import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const FALLBACK_COMBO_IMAGES: Record<string, string> = {
  'Bắp rang bơ lớn': 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=600',
  'Combo 1 người': 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=600',
  'Combo đôi': 'https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?w=600',
  'Combo gia đình': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600',
  'Nước ngọt lớn': 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600',
};

const normalizeComboImage = (name: string, imageUrl: string | null) => {
  const raw = (imageUrl || '').trim();
  if (!raw || /example\.com/i.test(raw)) {
    return FALLBACK_COMBO_IMAGES[name] || 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=600';
  }
  return raw;
};

export const getAllFoodCombos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const foodCombos = await prisma.foodCombo.findMany({
      orderBy: {
        name: 'asc'
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        image_url: true,
      }
    });

    const combos = foodCombos.map((combo) => ({
      ...combo,
      image_url: normalizeComboImage(combo.name, combo.image_url),
    }));

    res.status(200).json({
      success: true,
      message: 'Lấy danh sách combo thành công',
      data: combos
    });
  } catch (error) {
    next(error);
  }
};
