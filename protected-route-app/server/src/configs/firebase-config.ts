import * as admin from 'firebase-admin';
import { envConfig } from './envConfig';

admin.initializeApp({
  credential: admin.credential.cert(envConfig.FIREBASE as admin.ServiceAccount),
});

export default admin;
