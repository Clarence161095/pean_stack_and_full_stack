export const envConfig = {
  env: import.meta.env.VITE_ENV || 'local_dev',
  port: import.meta.env.VITE_BACKEND_PORT || 3344,
  host: import.meta.env.VITE_HOST || 'localhost',
  contactJsonKey: import.meta.env.VITE_CONTACT_JSON_KEY || 'contact1234',
};
//true: DB - Dev
//false: Mock
