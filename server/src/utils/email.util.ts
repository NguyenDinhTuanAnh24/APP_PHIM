import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const buildBrandEmail = (title: string, subtitle: string, body: string) => `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
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

export const sendOTPEmail = async (to: string, otp: string, name: string) => {
  const html = buildBrandEmail(
    'Mã xác thực tài khoản',
    'Bảo vệ tài khoản của bạn với OTP an toàn',
    `
      <p>Xin chào <strong style="color:#FFF;">${name}</strong>,</p>
      <p>Vui lòng nhập mã OTP bên dưới để xác thực tài khoản Movie Ticket:</p>
      <div style="margin: 18px 0; padding: 14px; border-radius: 10px; text-align: center; background-color: #0D0D0D; border: 1px dashed #3f3f46;">
        <span style="font-size: 34px; font-weight: 700; letter-spacing: 8px; color: #E50914;">${otp}</span>
      </div>
      <p>Mã này sẽ hết hạn sau <strong>5 phút</strong>.</p>
      <p style="margin-top: 18px; color: #9CA3AF; font-size: 12px;">Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email.</p>
    `
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Movie Ticket" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Mã xác thực Movie Ticket',
    html,
  };

  await transporter.sendMail(mailOptions);
};

export const sendResetPasswordEmail = async (to: string, otp: string) => {
  const html = buildBrandEmail(
    'Đặt lại mật khẩu',
    'Xác nhận yêu cầu khôi phục tài khoản',
    `
      <p>Chúng tôi nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn.</p>
      <p>Vui lòng sử dụng mã OTP sau để tiếp tục:</p>
      <div style="margin: 18px 0; padding: 14px; border-radius: 10px; text-align: center; background-color: #0D0D0D; border: 1px dashed #3f3f46;">
        <span style="font-size: 34px; font-weight: 700; letter-spacing: 8px; color: #E50914;">${otp}</span>
      </div>
      <p>Mã này sẽ hết hạn sau <strong>5 phút</strong>.</p>
      <p style="margin-top: 18px; color: #9CA3AF; font-size: 12px;">Nếu bạn không yêu cầu đổi mật khẩu, hãy đổi mật khẩu ngay sau khi đăng nhập để đảm bảo an toàn.</p>
    `
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Movie Ticket" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Đặt lại mật khẩu Movie Ticket',
    html,
  };

  await transporter.sendMail(mailOptions);
};

export const sendSupportToAdmin = async (data: { name: string; email: string; phone?: string; subject: string; message: string }) => {
  const html = buildBrandEmail(
    'Yêu cầu hỗ trợ mới',
    'Thông báo nội bộ từ hệ thống Movie Ticket',
    `
      <p><strong>Khách hàng:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>SĐT:</strong> ${data.phone || 'Không cung cấp'}</p>
      <p><strong>Chủ đề:</strong> ${data.subject}</p>
      <div style="margin-top: 12px; padding: 14px; border-radius: 10px; background-color: #0D0D0D; border: 1px solid #2A2A2A;">
        <p style="margin: 0; color: #9CA3AF; font-size: 12px;">Nội dung</p>
        <p style="margin: 6px 0 0; white-space: pre-wrap; color: #F3F4F6;">${data.message}</p>
      </div>
    `
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Movie Ticket Support" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: `[HỖ TRỢ] ${data.subject} - ${data.name}`,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export const sendSupportToUser = async (to: string, name: string, ticketCode?: string) => {
  const html = buildBrandEmail(
    'Đã tiếp nhận yêu cầu hỗ trợ',
    'Đội ngũ CSKH sẽ phản hồi sớm cho bạn',
    `
      <p>Xin chào <strong style="color:#FFF;">${name}</strong>,</p>
      <p>Cảm ơn bạn đã liên hệ với Movie Ticket.</p>
      ${ticketCode ? `<p>Mã yêu cầu của bạn: <strong style="color:#FFF;">#${ticketCode}</strong></p>` : ''}
      <p>Yêu cầu hỗ trợ của bạn đã được ghi nhận và sẽ được phản hồi trong vòng <strong>24 giờ</strong>.</p>
      <p style="margin-top: 18px; color: #9CA3AF; font-size: 12px;">Bạn có thể theo dõi trạng thái trong mục Hỗ trợ của ứng dụng.</p>
    `
  );

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Movie Ticket" <${process.env.SMTP_USER}>`,
    to,
    subject: 'Movie Ticket đã nhận yêu cầu của bạn',
    html,
  };

  await transporter.sendMail(mailOptions);
};
