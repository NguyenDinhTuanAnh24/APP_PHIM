import { Router } from 'express';
import { authenticate } from '../middlewares/auth.middleware';
import * as ctrl from '../controllers/point-redemption.controller';

const router = Router();

// Danh sách gói đổi điểm
router.get('/packages', authenticate, ctrl.getPackages);

// Đổi điểm
router.post('/redeem', authenticate, ctrl.redeemPoints);

// Voucher đã đổi của tôi
router.get('/my-vouchers', authenticate, ctrl.getMyVouchers);

// Lịch sử đổi điểm
router.get('/history', authenticate, ctrl.getHistory);

export default router;
