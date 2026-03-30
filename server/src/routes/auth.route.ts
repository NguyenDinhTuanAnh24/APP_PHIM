import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { authenticate, optionalAuth } from '../middlewares/auth.middleware';
import { validate } from '../middlewares/validate.middleware';
import { authRateLimit, otpRateLimit } from '../middlewares/rateLimit.middleware';
import { registerSchema, sendOtpSchema, verifyOtpSchema, loginSchema, changePasswordSchema, forgotPasswordSchema, resetPasswordSchema, googleAuthSchema } from '../validators/auth.validator';

const router = Router();

router.post('/register', authRateLimit, validate(registerSchema), authController.register);
router.post('/send-otp', otpRateLimit, validate(sendOtpSchema), authController.sendOtp);
router.post('/verify-otp', authRateLimit, validate(verifyOtpSchema), authController.verifyOtp);
router.post('/login', authRateLimit, validate(loginSchema), authController.login);
router.post('/google', authRateLimit, validate(googleAuthSchema), authController.googleLogin);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', optionalAuth, authController.logout);

router.post('/google/link', authenticate, validate(googleAuthSchema), authController.linkGoogle);
router.delete('/google/link', authenticate, authController.unlinkGoogle);
router.get('/providers', authenticate, authController.getAuthProviders);

router.put('/change-password', authenticate, validate(changePasswordSchema), authController.changePassword);
router.post('/forgot-password', otpRateLimit, validate(forgotPasswordSchema), authController.forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), authController.resetPassword);

export default router;
