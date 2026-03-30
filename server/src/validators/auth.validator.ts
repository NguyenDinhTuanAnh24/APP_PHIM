import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, "Tên phải có tối thiểu 2 ký tự").max(50, "Tên không được vượt quá 50 ký tự"),
  email: z.string().email("Định dạng email không đúng"),
  phone: z.string().regex(/^0\d{9}$/, "Số điện thoại phải gồm 10 số và bắt đầu bằng 0"),
  password: z.string()
    .min(8, "Mật khẩu tối thiểu 8 ký tự")
    .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
    .regex(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
    .regex(/[0-9]/, "Mật khẩu phải có ít nhất 1 số"),
  confirmPassword: z.string(),
  birthday: z.string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      const date = new Date(val);
      if (isNaN(date.getTime())) return false;
      // Phải từ 5 tuổi trở lên
      const minAge = new Date();
      minAge.setFullYear(minAge.getFullYear() - 5);
      return date <= minAge;
    }, 'Ngày sinh không hợp lệ hoặc chưa đủ 5 tuổi'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu không khớp",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email("Định dạng email không đúng"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

export const sendOtpSchema = z.object({
  email: z.string().email("Định dạng email không đúng"),
});

export const verifyOtpSchema = z.object({
  email: z.string().email("Định dạng email không đúng"),
  otp: z.string().length(6, "Mã OTP phải có đúng 6 ký tự số").regex(/^\d+$/, "Mã OTP chỉ bao gồm số"),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Vui lòng nhập mật khẩu hiện tại"),
  newPassword: z.string()
    .min(8, "Mật khẩu tối thiểu 8 ký tự")
    .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
    .regex(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
    .regex(/[0-9]/, "Mật khẩu phải có ít nhất 1 số"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Định dạng email không đúng"),
});

export const resetPasswordSchema = z.object({
  email: z.string().email("Định dạng email không đúng"),
  otp: z.string().length(6, "Mã OTP phải có đúng 6 ký tự số").regex(/^\d+$/, "Mã OTP chỉ bao gồm số"),
  newPassword: z.string()
    .min(8, "Mật khẩu tối thiểu 8 ký tự")
    .regex(/[A-Z]/, "Mật khẩu phải có ít nhất 1 chữ hoa")
    .regex(/[a-z]/, "Mật khẩu phải có ít nhất 1 chữ thường")
    .regex(/[0-9]/, "Mật khẩu phải có ít nhất 1 số"),
  confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Mật khẩu xác nhận không khớp",
  path: ["confirmPassword"],
});

export const googleAuthSchema = z.object({
  idToken: z.string().min(1, "idToken là bắt buộc"),
});
