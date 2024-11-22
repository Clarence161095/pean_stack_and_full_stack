import * as admin from 'firebase-admin';
import { envConfig } from './envConfig';

try {
  admin.initializeApp({
    credential: admin.credential.cert(envConfig.FIREBASE as admin.ServiceAccount),
  });
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Error initializing Firebase:', error);
}
