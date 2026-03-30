import { Router } from 'express';
import { createTicket, getMyTickets, getTicketById } from '../controllers/support.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Toàn bộ route hỗ trợ mới đều yêu cầu đăng nhập
router.use(authenticate);

router.post('/', createTicket);
router.get('/', getMyTickets);
router.get('/:id', getTicketById);

export default router;
