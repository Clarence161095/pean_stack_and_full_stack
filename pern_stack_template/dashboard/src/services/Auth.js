import { envConfig } from '../configs/EnvConfig';
import axios from 'axios';

export async function loginWithSSO(accessToken) {
  const api = envConfig.host + ':' + envConfig.port + '/sso-login';
  axios.defaults.withCredentials = true;
  await axios.post(api, null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      ContentType: 'application/json',
    },
    withCredentials: true,
  });
}

export async function loginWithAccount(email, password) {
  const api = envConfig.host + ':' + envConfig.port + '/login';
  axios.defaults.withCredentials = true;
  await axios.post(
    api,
    {
      email: email,
      password: password,
    },
    {
      headers: {
        ContentType: 'application/json',
      },
    },
  );
}

export async function getUserInfo() {
  const api = envConfig.host + ':' + envConfig.port + '/api/users';
  axios.defaults.withCredentials = true;
  const response = await axios.get(api);
  return response.data;
}
