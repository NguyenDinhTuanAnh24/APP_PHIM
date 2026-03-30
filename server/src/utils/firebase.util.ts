import * as admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

// Bạn có thể cung cấp đường dẫn đến file JSON hoặc chuỗi JSON trực tiếp
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;

if (!admin.apps.length) {
  try {
    if (serviceAccountPath) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccountPath),
      });
      console.log('[FIREBASE] Admin SDK initialized from service account path');
    } else {
      // Nếu không có file, có thể dùng các biến môi trường riêng lẻ (tùy chọn nâng cao)
      console.warn('[FIREBASE] FIREBASE_SERVICE_ACCOUNT_PATH is not defined. Firebase Admin might not work correctly.');
    }
  } catch (error: any) {
    console.error('[FIREBASE] Initialization error:', error.message);
  }
}

export const verifyGoogleToken = async (idToken: string) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return decodedToken;
  } catch (error: any) {
    console.error('[FIREBASE] Token verification failed:', error.message);
    throw new Error('Xác thực Token Google thất bại');
  }
};

export default admin;
