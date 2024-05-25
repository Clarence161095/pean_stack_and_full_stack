//import { post, get } from '../utils/api';
// truoc do chi co the lay method tu util cho real DB, gio dang can mock
//nen set nhu nay de get duoc mock va real db tu chung 1 config

import { get, post } from '../configs/api';

export async function loginWithSSO(accessToken, type = 'google') {
  const body = {
    accessToken,
    type,
  };
  return post('/sso-login', body);
}

export async function logout() {
  return get('/logout');
}

export async function getUserInfo() {
  return get('/api/user-info');
}
