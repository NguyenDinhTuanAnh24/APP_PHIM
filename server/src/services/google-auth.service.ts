import { firebaseAdmin, isFirebaseEnabled } from '../config/firebase';
import { prisma } from '../utils/prisma';
import { generateAccessToken, generateRefreshToken } from '../utils/jwt.util';
import bcrypt from 'bcryptjs';
import { AppError } from '../utils/AppError';
import { sendWelcomeGoogleSignupEmail } from './email.service';

export const verifyFirebaseToken = async (idToken: string) => {
  if (!isFirebaseEnabled || !firebaseAdmin) {
    throw new AppError('Dịch vụ xác thực Google hiện không khả dụng. Vui lòng thử lại sau hoặc sử dụng phương thức đăng nhập khác.', 503);
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken);
    return {
      uid: decodedToken.uid,
      email: decodedToken.email!,
      name: decodedToken.name || decodedToken.email?.split('@')[0] || 'User',
      picture: decodedToken.picture || null,
    };
  } catch (error) {
    throw new AppError('Token Firebase không hợp lệ hoặc đã hết hạn', 401);
  }
};

export const googleSignIn = async (idToken: string) => {
  // 1. Verify token
  const { uid, email, name, picture } = await verifyFirebaseToken(idToken);

  // 2. Tìm user
  let user = await prisma.user.findUnique({
    where: { google_id: uid },
  });

  if (!user) {
    user = await prisma.user.findUnique({
      where: { email },
    });
  }

  let isNewUser = false;

  // 3. Xử lý các trường hợp
  if (!user) {
    // CASE A: Tạo mới
    user = await prisma.user.create({
      data: {
        email,
        name,
        avatar_url: picture,
        google_id: uid,
        google_email: email,
        auth_provider: 'GOOGLE',
        is_verified: true,
      },
    });
    isNewUser = true;
    console.log('[GOOGLE] Tạo tài khoản mới:', email);
  } else if (user.auth_provider === 'EMAIL') {
    // CASE B: Liên kết từ email có sẵn
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        google_id: uid,
        google_email: email,
        auth_provider: 'BOTH',
        is_verified: true,
        avatar_url: user.avatar_url || picture,
      },
    });
    console.log('[GOOGLE] Liên kết tài khoản:', email);
  } else {
    // CASE C: Đã có Google/Both -> Cập nhật avatar nếu đổi
    if (picture && user.avatar_url !== picture) {
      user = await prisma.user.update({
        where: { id: user.id },
        data: { avatar_url: picture },
      });
    }
    console.log('[GOOGLE] Đăng nhập:', email);
  }

  // 4. Tokens
  const accessToken = generateAccessToken({ userId: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ userId: user.id });

  // 5. Lưu refresh token
  await prisma.user.update({
    where: { id: user.id },
    data: { refresh_token: await bcrypt.hash(refreshToken, 10) },
  });

  // 6. Gửi email chào mừng cho tài khoản mới đăng ký bằng Google (không block luồng đăng nhập)
  if (isNewUser) {
    sendWelcomeGoogleSignupEmail(user.email, user.name)
      .catch((err) => console.error('[GOOGLE] Welcome email failed:', err));
  }

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatar_url,
      loyaltyPoints: user.loyalty_points,
      authProvider: user.auth_provider,
      isNewUser,
    },
    message: isNewUser ? 'Đăng ký thành công bằng Google' : 'Đăng nhập thành công',
  };
};

export const linkGoogleAccount = async (userId: string, idToken: string) => {
  const { uid, email } = await verifyFirebaseToken(idToken);

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError('Người dùng không tồn tại', 404);

  if (user.auth_provider === 'GOOGLE' || user.auth_provider === 'BOTH') {
    throw new AppError('Tài khoản đã được liên kết với Google', 400);
  }

  // Yêu cầu email khớp để an toàn (không phân biệt hoa thường)
  if (email.toLowerCase() !== user.email.toLowerCase()) {
    throw new AppError(
      `Email Google (${email}) không khớp với tài khoản của bạn (${user.email}). ` +
      `Vui lòng chọn đúng tài khoản Google có địa chỉ ${user.email}`,
      400
    );
  }

  const existing = await prisma.user.findUnique({ where: { google_id: uid } });
  if (existing && existing.id !== userId) {
    throw new AppError('Tài khoản Google này đã liên kết với một tài khoản khác', 409);
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      google_id: uid,
      google_email: email,
      auth_provider: 'BOTH',
    },
  });

  return { message: 'Liên kết tài khoản Google thành công!' };
};

export const unlinkGoogleAccount = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError('Người dùng không tồn tại', 404);

  if (!user.password_hash) {
    throw new AppError('Bạn cần đặt mật khẩu trước khi bỏ liên kết Google để tránh mất quyền truy cập tài khoản', 400);
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      google_id: null,
      google_email: null,
      auth_provider: 'EMAIL',
    },
  });

  return { message: 'Đã bỏ liên kết tài khoản Google' };
};

export const getAuthProviders = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new AppError('Người dùng không tồn tại', 404);

  return {
    authProvider: user.auth_provider,
    hasPassword: !!user.password_hash,
    googleEmail: user.google_email,
    email: user.email,
    isGoogleOnly: user.auth_provider === 'GOOGLE',
    canLinkGoogle: user.auth_provider === 'EMAIL',
  };
};
