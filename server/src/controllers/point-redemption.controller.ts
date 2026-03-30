import { Request, Response, NextFunction } from 'express';
import * as service from '../services/point-redemption.service';

export const getPackages = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  try {
    const userId = (req as any).user!.userId;
    const packages = await service.getPackages(userId);
    res.status(200).json({ success: true, data: packages });
  } catch (e) { next(e); }
};

export const redeemPoints = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  try {
    const userId = (req as any).user!.userId;
    const { package_id } = req.body;

    if (!package_id) {
      res.status(400).json({
        success: false, message: 'Vui lòng chọn gói đổi điểm'
      });
      return;
    }

    const result = await service.redeemPoints(userId, package_id);

    res.status(200).json({
      success: true,
      message: `Đổi điểm thành công! Mã voucher: ${result.voucher_code}`,
      data:    result,
    });
  } catch (e) { next(e); }
};

export const getMyVouchers = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  try {
    const userId = (req as any).user!.userId;
    const vouchers = await service.getMyRedemptionVouchers(userId);
    res.status(200).json({ success: true, data: vouchers });
  } catch (e) { next(e); }
};

export const getHistory = async (
  req: Request, res: Response, next: NextFunction
): Promise<void> => {
  try {
    const userId = (req as any).user!.userId;
    const history = await service.getRedemptionHistory(userId);
    res.status(200).json({ success: true, data: history });
  } catch (e) { next(e); }
};
