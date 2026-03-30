import { Request, Response, NextFunction } from 'express';
import * as adminService from '../services/admin.service';

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export const getDashboardStats = asyncHandler(async (req: Request, res: Response) => {
    const stats = await adminService.getDashboardStats();
    res.json({ success: true, data: stats });
});

export const getRevenueChart = asyncHandler(async (req: Request, res: Response) => {
    const period = req.query.period as any || '7d';
    const chart = await adminService.getRevenueChart(period);
    res.json({ success: true, data: chart });
});

export const getRecentBookings = asyncHandler(async (req: Request, res: Response) => {
    const bookings = await adminService.getRecentBookings();
    res.json({ success: true, data: bookings });
});

export const getAdminBookings = asyncHandler(async (req: Request, res: Response) => {
    const bookings = await adminService.getAdminBookings(req.query);
    res.json({ success: true, ...bookings });
});

export const getAdminBookingDetail = asyncHandler(async (req: Request, res: Response) => {
    const booking = await adminService.getAdminBookingDetail(req.params.id as string);
    res.json({ success: true, data: booking });
});

export const updateBookingStatus = asyncHandler(async (req: Request, res: Response) => {
    const booking = await adminService.updateBookingStatus(req.params.id as string, req.body.status);
    res.json({ success: true, data: booking });
});

export const getAdminMovies = asyncHandler(async (req: Request, res: Response) => {
    const movies = await adminService.getAdminMovies(req.query as any);
    res.json({ success: true, ...movies });
});

export const createMovie = asyncHandler(async (req: Request, res: Response) => {
    const movie = await adminService.createMovie(req.body);
    res.json({ success: true, data: movie });
});

export const updateMovie = asyncHandler(async (req: Request, res: Response) => {
    const movie = await adminService.updateMovie(req.params.id as string, req.body);
    res.json({ success: true, data: movie });
});

export const deleteMovie = asyncHandler(async (req: Request, res: Response) => {
    await adminService.deleteMovie(req.params.id as string);
    res.json({ success: true, message: 'Xóa phim thành công' });
});

export const createShowtime = asyncHandler(async (req: Request, res: Response) => {
    const showtime = await adminService.createShowtime(req.body);
    res.json({ success: true, data: showtime });
});

export const updateShowtime = asyncHandler(async (req: Request, res: Response) => {
    const showtime = await adminService.updateShowtime(req.params.id as string, req.body);
    res.json({ success: true, data: showtime });
});

export const deleteShowtime = asyncHandler(async (req: Request, res: Response) => {
    await adminService.deleteShowtime(req.params.id as string);
    res.json({ success: true, message: 'Xóa suất chiếu thành công' });
});

export const getAdminUsers = asyncHandler(async (req: Request, res: Response) => {
    const users = await adminService.getAdminUsers(req.query as any);
    res.json({ success: true, ...users });
});

export const getAdminUserDetail = asyncHandler(async (req: Request, res: Response) => {
    const user = await adminService.getAdminUserDetail(req.params.id as string);
    res.json({ success: true, data: user });
});

export const banUser = asyncHandler(async (req: Request, res: Response) => {
    await adminService.banUser(req.params.id as string, req.body.reason);
    res.json({ success: true, message: 'Đã khóa tài khoản thành công' });
});

export const getAllTickets = asyncHandler(async (req: Request, res: Response) => {
    const tickets = await adminService.getAllTickets(req.query as any);
    res.json({ success: true, ...tickets });
});

export const replyTicket = asyncHandler(async (req: Request, res: Response) => {
    const ticket = await adminService.replyTicket(req.params.id as string, req.body.reply, req.user!.userId);
    res.json({ success: true, data: ticket });
});
