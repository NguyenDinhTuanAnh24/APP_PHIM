import { Router } from 'express';
import * as voucherController from '../controllers/voucher.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Tất cả route voucher đều yêu cầu login
router.use(authenticate);

router.post('/validate', voucherController.validateVoucher);
router.get('/available', voucherController.getAvailableVouchers);

export default router;
