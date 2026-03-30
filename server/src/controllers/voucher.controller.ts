import { Request, Response, NextFunction } from 'express';
import * as voucherService from '../services/voucher.service';

export const validateVoucher = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { code, amount } = req.body;
    const userId = req.user!.userId;

    const result = await voucherService.validateVoucher(code, amount, userId);

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const getAvailableVouchers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const amount = Number(req.query.amount) || 0;
    const userId = req.user!.userId;

    const vouchers = await voucherService.getAvailableVouchers(userId, amount);

    res.status(200).json({
      success: true,
      data: vouchers
    });
  } catch (error) {
    next(error);
  }
};
