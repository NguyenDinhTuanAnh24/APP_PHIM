import * as admin from 'firebase-admin';
import * as path from 'path';
import * as fs from 'fs';

let firebaseInitialized = false;

try {
  const serviceAccountPath = path.join(__dirname, '../../firebase-service-account.json');
  
  if (!fs.existsSync(serviceAccountPath)) {
    console.warn('[FIREBASE] Service account file not found. Firebase features will be disabled.');
  } else {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));
    
    // Check if the service account has valid data (not placeholders)
    if (serviceAccount.project_id === 'YOUR_PROJECT_ID' || !serviceAccount.private_key || serviceAccount.private_key.includes('...')) {
      console.warn('[FIREBASE] Service account file contains placeholder values. Please update with your real Firebase credentials.');
      console.warn('[FIREBASE] Firebase features will be disabled until valid credentials are provided.');
    } else {
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        });
        firebaseInitialized = true;
        console.log('[FIREBASE] Successfully initialized Firebase Admin SDK');
      }
    }
  }
} catch (error) {
  console.error('[FIREBASE] Error initializing Firebase:', error instanceof Error ? error.message : error);
  console.warn('[FIREBASE] Firebase features will be disabled.');
}

export const firebaseAdmin = firebaseInitialized ? admin : null;
export const isFirebaseEnabled = firebaseInitialized;
