import { envConfig } from "../configs/EnvConfig";

export const prefixApi = envConfig.host + ':' + envConfig.port;

export async function get(api = '/announcements') {
  const url = prefixApi + api;
  const response = await fetch(url);
  const json = await response.json();
  // wait 3s
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  return json;
}

export default {
  get,
}