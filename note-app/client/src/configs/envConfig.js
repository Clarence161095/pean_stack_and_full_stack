export const envConfig = {
  env: import.meta.env.ENV || 'dev',
  port: import.meta.env.VITE_BACKEND_PORT || 3344,
  host: import.meta.env.VITE_HOST || 'localhost',
};
