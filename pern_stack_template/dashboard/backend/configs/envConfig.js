export const envConfig = {
  PORT: process.env.PORT || 3344,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://root:example@localhost:27017',
  JWT_SECRET: process.env.JWT_SECRET || 'binhchilinh1234',
  FIREBASE: {
    apiKey: process.env.FIREBASE_API_KEY || 'apiKey',
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'authDomain',
    projectId: process.env.FIREBASE_PROJECT_ID || 'projectId',
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'storageBucket',
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || 'messagingSenderId',
    appId: process.env.FIREBASE_APP_ID || 'appId',
  }
};
