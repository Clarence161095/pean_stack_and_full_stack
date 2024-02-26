import { post, get } from '../utils/api';

export async function loginWithSSO(accessToken, type = 'google') {
  const body = {
    accessToken,
    type,
  };
  return post('/sso-login', body);
}

export async function getUserInfo() {
  return get('/api/user-info');
}
