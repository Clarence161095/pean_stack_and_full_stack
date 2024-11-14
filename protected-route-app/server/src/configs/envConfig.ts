import dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3500,
  JWT_SECRET: process.env.JWT_SECRET || 'binhchilinh1234',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'cookie_secret',
  FIREBASE: {
    type: process.env.FIREBASE_TYPE || 'service_account',
    project_id: process.env.FIREBASE_PROJECT_ID || 'your-project-id',
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID || 'your-private',
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL || 'your-client-email',
    client_id: process.env.FIREBASE_CLIENT_ID || 'your-client',
    auth_uri: process.env.FIREBASE_AUTH_URI || 'your-auth-uri',
    token_uri: process.env.FIREBASE_TOKEN_URI || 'your-token',
    auth_provider_x509_cert_url:
      process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL || 'your-auth-provider',
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL || 'your-client',
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN || 'your-universe',
  },
  CORS_LIST:
    process.env.CORS_LIST || 'http://localhost:5173,http://192.168.0.11:5173,http://localhost:3344',
};
