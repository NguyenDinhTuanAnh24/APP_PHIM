import { Router } from 'express';
import { authenticate, requireAdmin } from '../middlewares/auth.middleware';
import * as adminController from '../controllers/admin.controller';

const router = Router();

router.use(authenticate);
router.use(requireAdmin);

// Dashboard
router.get('/dashboard/stats',           adminController.getDashboardStats);
router.get('/dashboard/revenue',         adminController.getRevenueChart);
router.get('/dashboard/recent-bookings',  adminController.getRecentBookings);

// Bookings
router.get('/bookings',                   adminController.getAdminBookings);
router.get('/bookings/:id',               adminController.getAdminBookingDetail);
router.patch('/bookings/:id/status',      adminController.updateBookingStatus);

// Movies
router.get('/movies',                     adminController.getAdminMovies);
router.post('/movies',                    adminController.createMovie);
router.put('/movies/:id',                 adminController.updateMovie);
router.delete('/movies/:id',              adminController.deleteMovie);

// Showtimes
router.post('/showtimes',                 adminController.createShowtime);
router.put('/showtimes/:id',              adminController.updateShowtime);
router.delete('/showtimes/:id',           adminController.deleteShowtime);

// Users
router.get('/users',                      adminController.getAdminUsers);
router.get('/users/:id',                  adminController.getAdminUserDetail);
router.patch('/users/:id/ban',            adminController.banUser);

// Support
router.get('/support',                    adminController.getAllTickets);
router.patch('/support/:id/reply',        adminController.replyTicket);

export default router;
