import { Request, Response, NextFunction } from 'express';
import * as supportService from '../services/support.service';

export const createTicket = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.userId;
    const { category, subject, message } = req.body;

    const ticket = await supportService.createTicket({
      userId,
      category,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Gửi yêu cầu hỗ trợ thành công',
      data: ticket,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTickets = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.userId;
    const tickets = await supportService.getMyTickets(userId);

    res.status(200).json({
      success: true,
      data: tickets,
    });
  } catch (error) {
    next(error);
  }
};

export const getTicketById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user!.userId;
    const id = req.params.id as string;

    const ticket = await supportService.getTicketById(id, userId);

    res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    next(error);
  }
};
