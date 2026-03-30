import nodemailer from 'nodemailer';
import { Prisma } from '@prisma/client';

// Simplified type for booking details
interface BookingWithDetails {
  id: string;
  user_id: string;
  qr_code: string;
  qr_image_url: string | null;
  total_amount: number;
  status: string;
  paid_at: Date | null;
  created_at: Date;
  expires_at: Date;
  showtime: {
    movie: {
      title: string;
      poster_url: string | null;
    };
    start_time: Date;
    room: {
      name: string;
      cinema: {
        name: string;
        address: string;
      };
    };
  };
  booking_items: Array<{
    seat: {
      row: string;
      col: number;
    };
  }>;
  food_items: Array<{
    combo: {
      name: string;
    };
    quantity: number;
  }>;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,  // false với port 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Dùng SMTP_PASS thay cho SMTP_PASSWORD
  },
});

const buildBrandEmail = (title: string, subtitle: string, body: string) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
  </head>
  <body style="font-family: Arial, sans-serif; margin: 0; padding: 24px; background-color: #0A0A0A; color: #FFFFFF;">
    <div style="max-width: 620px; margin: 0 auto; background-color: #141414; border-radius: 14px; overflow: hidden; border: 1px solid #2a2a2a;">
      <div style="background: linear-gradient(135deg, #E50914 0%, #8B0000 100%); padding: 26px 22px; text-align: center;">
        <div style="font-size: 28px; margin-bottom: 4px;">🎬</div>
        <h1 style="margin: 0; color: #fff; font-size: 24px;">${title}</h1>
        <p style="margin: 8px 0 0; color: #ffe5e7; font-size: 13px;">${subtitle}</p>
      </div>
      <div style="padding: 24px; line-height: 1.7; color: #E5E7EB;">
        ${body}
      </div>
      <div style="padding: 14px; border-top: 1px solid #2A2A2A; text-align: center; color: #6B7280; font-size: 12px;">
        © 2026 Movie Ticket Official. All rights reserved.
      </div>
    </div>
  </body>
  </html>
`;

// Verify kết nối khi server khởi động
transporter.verify((error, success) => {
  if (error) {
    console.error('[EMAIL] SMTP connection failed:', error.message);
  } else {
    console.log('[EMAIL] SMTP ready to send emails');
  }
});

export const sendBookingConfirmation = async (booking: any) => {
  try {
    // Lấy email người dùng từ object lồng nhau
    const userEmail = booking.user?.email;
    if (!userEmail) {
      throw new Error('User email not found in booking details');
    }

    // Create seat list
    const seats = booking.booking_items?.map((item: any) => `${item.seat.row}${item.seat.col}`).join(', ') || '';

    // Create food list
    const foods = booking.food_items?.map((item: any) => `${item.combo.name} × ${item.quantity}`).join(', ') || '';

    // Create HTML template
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Xác nhận đặt vé thành công - ${booking.showtime.movie.title}</title>
      </head>
      <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #121212; color: #FFFFFF;">
        <!-- Header -->
        <div style="background-color: #c00; padding: 20px; text-align: center;">
          <h1 style="margin: 0; color: #fff;">🎬 ĐẶT VÉ THÀNH CÔNG</h1>
        </div>

        <!-- Hero -->
        <div style="background-color: #1a1a1a; padding: 20px; text-align: center;">
          <img src="${booking.showtime.movie.poster_url}" alt="Movie poster" style="max-width: 200px; border-radius: 8px;">
        </div>

        <!-- Main content -->
        <div style="background-color: #121212; padding: 20px;">
          <h2 style="color: #fff; text-align: center;">${booking.showtime.movie.title}</h2>

          <!-- Showtime info -->
          <div style="background-color: #1a1a1a; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h3 style="color: #fff; margin-top: 0;">Thông tin suất chiếu</h3>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div style="width: 24px;">🎭</div>
              <div style="margin-left: 10px;">${booking.showtime.room.cinema.name} - ${booking.showtime.room.name}</div>
            </div>
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div style="width: 24px;">🕒</div>
              <div style="margin-left: 10px;">${new Date(booking.showtime.start_time).toLocaleString('vi-VN')}</div>
            </div>
          </div>

          <!-- Seats info -->
          <div style="background-color: #1a1a1a; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h3 style="color: #fff; margin-top: 0;">Ghế đã đặt</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              ${seats}
            </div>
          </div>

          <!-- Foods info -->
          ${foods ? `
          <div style="background-color: #1a1a1a; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h3 style="color: #fff; margin-top: 0;">Combo đồ ăn</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
              ${foods}
            </div>
          </div>
          ` : ''}

          <!-- QR Code -->
          ${booking.qr_image_url ? `
          <div style="background-color: #fff; border-radius: 8px; padding: 16px; margin-bottom: 20px; text-align: center;">
            <h3 style="color: #000; margin-top: 0;">MÃ QR - VÉ ĐIỆN TỬ</h3>
            <img src="${booking.qr_image_url}" alt="QR Code" style="max-width: 250px; border-radius: 8px;">
            <p style="color: #000; font-weight: bold;">Xuất trình mã này tại quầy soát vé</p>
            <p style="color: #666; font-size: 12px;">Mã vé: ${booking.id.slice(0, 8).toUpperCase()}</p>
          </div>
          ` : ''}

          <!-- Footer -->
          <div style="background-color: #1a1a1a; border-radius: 8px; padding: 16px; text-align: center; margin-top: 20px;">
            <p style="margin: 0; color: #fff;">Cảm ơn bạn đã sử dụng <strong>Movie Ticket</strong></p>
            <p style="margin: 0; color: #fff; font-size: 12px;">Mọi thắc mắc vui lòng liên hệ hỗ trợ</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@movieticket.com',
      to: userEmail,
      subject: `🎬 Đặt vé thành công - ${booking.showtime.movie.title}`,
      html
    });
  } catch (error) {
    console.error('[EMAIL] Error sending email:', error);
    throw error;
  }
};
export const sendBirthdayEmail = async (user: any) => {
  try {
    const appUrl = process.env.APP_URL || 'https://movieticket.app';
    const html = buildBrandEmail(
      `Chúc mừng sinh nhật, ${user.name}! 🎂`,
      'Quà tặng sinh nhật dành riêng cho bạn',
      `
        <p>Xin chào <strong style="color:#FFF;">${user.name}</strong>,</p>
        <p>Movie Ticket chúc bạn một ngày sinh nhật thật vui vẻ, hạnh phúc và nhiều khoảnh khắc đáng nhớ!</p>
        <div style="margin: 20px 0; padding: 16px; border-radius: 10px; background-color: #0D0D0D; border: 1px dashed #3f3f46; text-align: center;">
          <p style="margin: 0; color: #F59E0B; font-size: 16px;">🎁 Quà tặng sinh nhật</p>
          <p style="margin: 8px 0 0; font-size: 24px; font-weight: 700; color: #FFFFFF;">+100 ĐIỂM THÀNH VIÊN</p>
        </div>
        <p>Điểm đã được cộng vào tài khoản của bạn. Chúc bạn có trải nghiệm xem phim thật trọn vẹn!</p>
        <div style="text-align: center; margin-top: 18px;">
          <a href="${appUrl}" style="display:inline-block; background-color:#E50914; color:#fff; padding:12px 24px; text-decoration:none; border-radius:8px; font-weight:700;">ĐẶT VÉ NGAY</a>
        </div>
      `
    );

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@movieticket.com',
      to: user.email,
      subject: `🎂 Chúc mừng sinh nhật, ${user.name}! Quà tặng từ Movie Ticket`,
      html
    });
  } catch (error) {
    console.error('[EMAIL] Birthday email failed:', error);
  }
};

export const sendWelcomeGoogleSignupEmail = async (userEmail: string, userName: string) => {
  const appUrl = process.env.APP_URL || 'https://movieticket.app';
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Chào mừng đến với Movie Ticket</title>
    </head>
    <body style="font-family: Arial, sans-serif; margin: 0; padding: 24px; background-color: #0A0A0A; color: #FFFFFF;">
      <div style="max-width: 620px; margin: 0 auto; background-color: #141414; border-radius: 14px; overflow: hidden; border: 1px solid #2a2a2a;">
        <div style="background: linear-gradient(135deg, #E50914 0%, #8B0000 100%); padding: 28px 24px; text-align: center;">
          <div style="font-size: 30px; margin-bottom: 6px;">🎬</div>
          <h1 style="margin: 0; color: #fff; font-size: 26px; letter-spacing: 0.3px;">Chào mừng đến với Movie Ticket!</h1>
          <p style="margin: 10px 0 0; color: #ffe5e7; font-size: 14px;">Đặt vé nhanh - săn ưu đãi - tích điểm mỗi ngày</p>
        </div>

        <div style="padding: 24px; line-height: 1.7; color: #E5E7EB;">
          <p style="margin-top: 0;">Xin chào <strong style="color: #FFFFFF;">${userName}</strong>,</p>
          <p>
            Tài khoản của bạn đã được đăng ký thành công bằng Google.
            Cảm ơn bạn đã tham gia cùng cộng đồng yêu phim tại <strong>Movie Ticket</strong>.
          </p>
          <p>
            Bạn đã sẵn sàng khám phá lịch chiếu mới nhất, săn ưu đãi và đặt vé nhanh chóng ngay trong ứng dụng.
          </p>

          <div style="margin-top: 18px; padding: 14px; border-radius: 10px; background-color: #0D0D0D; border: 1px dashed #3f3f46;">
            <p style="margin: 0; color: #bbb; font-size: 13px;">
              Tài khoản đăng ký: <strong style="color: #fff;">${userEmail}</strong>
            </p>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="${appUrl}" style="display: inline-block; background-color: #E50914; color: #FFFFFF; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px;">
              ĐẶT VÉ NGAY
            </a>
          </div>

          <p style="margin-top: 24px; color: #9CA3AF; font-size: 12px; text-align: center;">
            Nếu bạn không thực hiện đăng ký này, vui lòng liên hệ bộ phận hỗ trợ để được kiểm tra ngay.
          </p>
        </div>

        <div style="padding: 14px; border-top: 1px solid #2A2A2A; text-align: center; color: #6B7280; font-size: 12px;">
          © 2026 Movie Ticket Official. All rights reserved.
        </div>
      </div>
    </body>
    </html>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || 'noreply@movieticket.com',
    to: userEmail,
    subject: '🎉 Chào mừng bạn đến với Movie Ticket',
    html,
  });
};

export const sendSupportReplyEmail = async (userEmail: string, userName: string, ticketSubject: string, adminReply: string) => {
  try {
    const html = buildBrandEmail(
      'Phản hồi từ đội ngũ hỗ trợ',
      'Chúng tôi đã cập nhật yêu cầu của bạn',
      `
        <p>Xin chào <strong style="color:#FFF;">${userName}</strong>,</p>
        <p>Yêu cầu hỗ trợ của bạn đã được quản trị viên phản hồi.</p>
        <div style="margin: 14px 0; padding: 16px; border-radius: 10px; background-color: #0D0D0D; border: 1px solid #2A2A2A;">
          <p style="margin: 0; color: #9CA3AF; font-size: 12px;">Yêu cầu</p>
          <p style="margin: 6px 0 0; color: #F3F4F6;"><strong>${ticketSubject || 'Hỗ trợ'}</strong></p>
          <p style="margin: 14px 0 0; color: #9CA3AF; font-size: 12px;">Phản hồi</p>
          <p style="margin: 6px 0 0; color: #F3F4F6; white-space: pre-wrap;">${adminReply}</p>
        </div>
        <p style="margin-top: 14px;">Nếu bạn còn thắc mắc, hãy gửi thêm yêu cầu hỗ trợ trong ứng dụng.</p>
      `
    );

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@movieticket.com',
      to: userEmail,
      subject: `[Support] Phản hồi yêu cầu: ${ticketSubject || 'Movie Ticket'}`,
      html
    });
    console.log(`[EMAIL] Support reply sent to: ${userEmail}`);
  } catch (error) {
    console.error('[EMAIL] Support reply email failed:', error);
  }
};

export { transporter };
