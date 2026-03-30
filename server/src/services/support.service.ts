import { prisma } from '../utils/prisma';
import { sendSupportToUser } from '../utils/email.util';

export const createTicket = async (data: {
  userId: string;
  category: string;
  subject: string;
  message: string;
}) => {
  // Validate
  if (!data.subject || data.subject.length > 100) {
    throw new Error('Tiêu đề không được để trống và tối đa 100 ký tự');
  }
  if (!data.message || data.message.length < 20) {
    throw new Error('Nội dung phải có ít nhất 20 ký tự');
  }

  const ticket = await prisma.supportTicket.create({
    data: {
      user_id: data.userId,
      category: data.category,
      subject: data.subject,
      message: data.message,
      status: 'PENDING',
    },
    include: {
      user: true,
    },
  });

  // Gửi email xác nhận tới user
  try {
    const ticketCode = ticket.id.slice(0, 8).toUpperCase();
    await sendSupportTicketConfirmation(ticket.user.email, ticket.user.name, ticketCode);
  } catch (error) {
    console.error('[SUPPORT] Error sending confirmation email:', error);
  }

  return ticket;
};

export const getMyTickets = async (userId: string) => {
  return await prisma.supportTicket.findMany({
    where: { user_id: userId },
    orderBy: { created_at: 'desc' },
  });
};

export const getTicketById = async (id: string, userId: string) => {
  const ticket = await prisma.supportTicket.findFirst({
    where: { id, user_id: userId },
  });

  if (!ticket) {
    const error = new Error('Không tìm thấy yêu cầu hỗ trợ');
    (error as any).statusCode = 404;
    throw error;
  }

  return ticket;
};

// Helper function to send confirmation email
async function sendSupportTicketConfirmation(email: string, name: string, ticketCode: string) {
  await sendSupportToUser(email, name, ticketCode);
}
