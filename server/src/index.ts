import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import authRoutes from './routes/auth.route';
import movieRoutes from './routes/movie.route';
import cinemaRoutes from './routes/cinema.route';
import showtimeRoutes from './routes/showtime.route';
import bookingRoutes from './routes/booking.route';
import paymentRoutes from './routes/payment.route';
import userRoutes from './routes/user.route';
import supportRoutes from './routes/support.route';
import voucherRoutes from './routes/voucher.route';
import adminRoutes from './routes/admin.route';
import pointRedemptionRoutes from './routes/point-redemption.route';

import path from 'path';
import { AppError } from './utils/AppError';
import { initSyncIfEmpty } from './jobs/sync-movies.job';
import { startExpireBookingsJob } from './jobs/expire-bookings.job';
import './jobs/birthday.job';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Log mọi Request để debug
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[REQUEST] ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/cinemas', cinemaRoutes);
app.use('/api/showtimes', showtimeRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/support', supportRoutes);
app.use('/api/vouchers', voucherRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/points', pointRedemptionRoutes);


// Bắt mọi request lỗi 404
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: `Route không tồn tại: ${req.method} ${req.url}` });
});

// Xử lý lỗi chung
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message || 'Lỗi server nội bộ';

  console.error(err);
  res.status(statusCode).json({
    success: false,
    message,
    data: null
  });
});

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server đang chạy tại http://0.0.0.0:${PORT}`);

  // Auto sync movies nếu DB rỗng
  initSyncIfEmpty().catch(console.error);

  // Khởi động cron job expire bookings
  startExpireBookingsJob();
});
