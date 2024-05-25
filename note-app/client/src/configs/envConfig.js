export const envConfig = {
  port: import.meta.env.VITE_BACKEND_PORT || 3344,
  host: import.meta.env.VITE_HOST || 'localhost',
  env: import.meta.env.VITE_ENV || 'dev',
};
//true: DB - Dev
//false: Mock
