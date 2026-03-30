import { prisma } from '../utils/prisma';
import bcrypt from 'bcryptjs';
import { AppError } from '../utils/AppError';
import { generateOTP, hashOTP, verifyOTP } from '../utils/otp.util';
import { sendOTPEmail, sendResetPasswordEmail } from '../utils/email.util';
import redisClient from '../utils/redis.util';
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from '../utils/jwt.util';
import { verifyGoogleToken } from '../utils/firebase.util';

const BCRYPT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || '12');

export const register = async (data: any) => {
  // Kiểm tra email - Tận dụng tính không phân biệt hoa thường mặc định của MySQL
  const existingEmail = await prisma.user.findFirst({
    where: {
      email: data.email.toLowerCase().trim()
    }
  });
  if (existingEmail) {
    throw new AppError('Email này đã được sử dụng bởi tài khoản khác', 409);
  }

  // Kiểm tra phone (chỉ khi có nhập phone)
  let normalizedPhone = data.phone;
  if (data.phone) {
    // Chuẩn hóa phone: bỏ khoảng trắng, dấu gạch
    normalizedPhone = data.phone.replace(/[\s\-\.]/g, '');

    const existingPhone = await prisma.user.findFirst({
      where: { phone: normalizedPhone }
    });
    if (existingPhone) {
      throw new AppError('Số điện thoại này đã được đăng ký bởi tài khoản khác', 409);
    }
  }

  // Hash password và tạo user
  const passwordHash = await bcrypt.hash(data.password, BCRYPT_ROUNDS);
  
  const newUser = await prisma.user.create({
    data: {
      email:         data.email.toLowerCase().trim(),
      phone:         normalizedPhone || null,
      password_hash: passwordHash,
      name:          data.name.trim(),
      role:          'USER',
      loyalty_points: 0,
      is_verified:    false,
      date_of_birth: data.birthday ? new Date(data.birthday) : null,
    }
  });

  // Gửi OTP xác thực
  await sendOtp(newUser.email);

  return {
    message: 'Đăng ký thành công, vui lòng xác thực email'
  };
};

export const sendOtp = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError("Email không tồn tại", 404);

  const otpKey = `otp:${email}`;
  const existingOtpCache = await redisClient.get(otpKey);
  
  if (existingOtpCache) {
    const ttl = await redisClient.ttl(otpKey);
    throw new AppError(`Vui lòng chờ ${ttl} giây trước khi gửi lại`, 400);
  }

  const otp = generateOTP();
  const hashedOtp = await hashOTP(otp);

  await redisClient.setEx(otpKey, parseInt(process.env.OTP_EXPIRES_MINUTES || '5') * 60, JSON.stringify({ hash: hashedOtp, attempts: 0 }));

  await sendOTPEmail(email, otp, user.name);

  return { message: `Đã gửi mã OTP đến ${email}` };
};

export const verifyOtp = async (email: string, otp: string) => {
  const otpKey = `otp:${email}`;
  const otpDataStr = await redisClient.get(otpKey);

  if (!otpDataStr) throw new AppError("Mã OTP đã hết hạn", 400);

  const otpData = JSON.parse(otpDataStr);

  if (otpData.attempts >= 5) {
    await redisClient.del(otpKey);
    throw new AppError("Đã nhập sai quá nhiều lần", 400);
  }

  const isValid = await verifyOTP(otp, otpData.hash);

  if (!isValid) {
    otpData.attempts += 1;
    await redisClient.setEx(otpKey, await redisClient.ttl(otpKey), JSON.stringify(otpData));
    throw new AppError("Mã OTP không đúng", 400);
  }

  await redisClient.del(otpKey);

  const user = await prisma.user.update({
    where: { email },
    data: { is_verified: true }
  });

  const accessToken = generateAccessToken({ userId: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ userId: user.id });

  const hashedRefreshToken = await bcrypt.hash(refreshToken, BCRYPT_ROUNDS);

  await prisma.user.update({
    where: { id: user.id },
    data: { refresh_token: hashedRefreshToken }
  });

  return {
    accessToken,
    refreshToken,
    user: { id: user.id, name: user.name, email: user.email, role: user.role }
  };
};

export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError("Email hoặc mật khẩu không đúng", 400);

  if (!user.password_hash) {
    throw new AppError("Tài khoản này đã đăng ký qua Google. Vui lòng đăng nhập bằng Google.", 400);
  }

  const isValidPassword = await bcrypt.compare(password, user.password_hash);
  if (!isValidPassword) throw new AppError("Email hoặc mật khẩu không đúng", 400);

  if (!user.is_verified) throw new AppError("Tài khoản chưa xác thực email", 403);

  const accessToken = generateAccessToken({ userId: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ userId: user.id });

  const hashedRefreshToken = await bcrypt.hash(refreshToken, BCRYPT_ROUNDS);

  await prisma.user.update({
    where: { id: user.id },
    data: { refresh_token: hashedRefreshToken }
  });

  return {
    accessToken,
    refreshToken,
    user: { 
      id: user.id, 
      name: user.name, 
      email: user.email, 
      role: user.role, 
      avatarUrl: user.avatar_url, 
      loyaltyPoints: user.loyalty_points 
    }
  };
};

export const refreshToken = async (token: string) => {
  const payload = verifyRefreshToken(token);
  if (!payload) throw new AppError("Token không hợp lệ", 401);

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user || !user.refresh_token) throw new AppError("Tài khoản không tồn tại hoặc đã đăng xuất", 401);

  const isValidToken = await bcrypt.compare(token, user.refresh_token);
  if (!isValidToken) throw new AppError("Token đã được sử dụng hoặc không hợp lệ", 401);

  const newAccessToken = generateAccessToken({ userId: user.id, role: user.role });
  const newRefreshToken = generateRefreshToken({ userId: user.id });

  const hashedRefreshToken = await bcrypt.hash(newRefreshToken, BCRYPT_ROUNDS);

  await prisma.user.update({
    where: { id: user.id },
    data: { refresh_token: hashedRefreshToken }
  });

  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
};

export const logout = async (userId?: string): Promise<void> => {
  if (!userId) return;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { refresh_token: null }
    });
  } catch (_) {
    // Bỏ qua lỗi nếu user không tồn tại hoặc lỗi connection
  }
};

export const changePassword = async (userId: string, data: any) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError("Người dùng không tồn tại", 404);

  if (!user.password_hash) {
    throw new AppError("Tài khoản này chưa có mật khẩu (đăng ký qua Google).", 400);
  }

  const isValidPassword = await bcrypt.compare(data.currentPassword, user.password_hash);
  if (!isValidPassword) throw new AppError("Mật khẩu hiện tại không đúng", 400);

  const newHash = await bcrypt.hash(data.newPassword, BCRYPT_ROUNDS);

  await prisma.user.update({
    where: { id: userId },
    data: { password_hash: newHash, refresh_token: null }
  });

  return { message: "Đổi mật khẩu thành công, vui lòng đăng nhập lại" };
};

export const forgotPassword = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new AppError("Email không tồn tại", 404);

  const otpKey = `reset:${email}`;
  const existingOtpCache = await redisClient.get(otpKey);
  
  if (existingOtpCache) {
    const ttl = await redisClient.ttl(otpKey);
    throw new AppError(`Vui lòng chờ ${ttl} giây trước khi gửi lại`, 400);
  }

  const otp = generateOTP();
  const hashedOtp = await hashOTP(otp);

  await redisClient.setEx(otpKey, parseInt(process.env.OTP_EXPIRES_MINUTES || '5') * 60, JSON.stringify({ hash: hashedOtp }));

  await sendResetPasswordEmail(email, otp);

  return { message: `Đã gửi mã OTP đến ${email}` };
};

export const resetPassword = async (email: string, otp: string, newPassword: string) => {
  const otpKey = `reset:${email}`;
  const otpDataStr = await redisClient.get(otpKey);

  if (!otpDataStr) throw new AppError("Mã OTP đã hết hạn", 400);

  const otpData = JSON.parse(otpDataStr);
  const isValid = await verifyOTP(otp, otpData.hash);

  if (!isValid) throw new AppError("Mã OTP không đúng", 400);

  await redisClient.del(otpKey);

  const newHash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);

  await prisma.user.update({
    where: { email },
    data: { password_hash: newHash, refresh_token: null }
  });

  return { message: "Đặt lại mật khẩu thành công" };
};

export const googleLogin = async (idToken: string) => {
  const decodedToken = await verifyGoogleToken(idToken);
  const { email, name, picture, uid } = decodedToken;

  if (!email) {
    throw new AppError("Không thể lấy email từ Google", 400);
  }

  // Tìm user theo google_id hoặc email
  let user = await prisma.user.findFirst({
    where: {
      OR: [
        { google_id: uid },
        { email: email.toLowerCase() }
      ]
    }
  });

  if (user) {
    // Nếu tìm thấy qua email nhưng chưa có google_id thì cập nhật
    if (!user.google_id) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { 
          google_id: uid,
          is_verified: true // Google mặc định đã verify
        }
      });
    }
  } else {
    // Tạo user mới
    user = await prisma.user.create({
      data: {
        email: email.toLowerCase(),
        name: name || 'Google User',
        avatar_url: picture || null,
        google_id: uid,
        is_verified: true,
        loyalty_points: 0
      }
    });
  }

  if (user.is_banned) {
    throw new AppError(`Tài khoản đã bị khóa: ${user.ban_reason || 'Không rõ lý do'}`, 403);
  }

  // Tạo tokens
  const accessToken = generateAccessToken({ userId: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ userId: user.id });

  const hashedRefreshToken = await bcrypt.hash(refreshToken, BCRYPT_ROUNDS);

  await prisma.user.update({
    where: { id: user.id },
    data: { refresh_token: hashedRefreshToken }
  });

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatar_url,
      loyaltyPoints: user.loyalty_points
    }
  };
};
