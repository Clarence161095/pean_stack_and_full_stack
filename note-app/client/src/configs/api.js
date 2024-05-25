import { mockGet, mockPost } from '../mock/api';
import { apiGet, apiPost } from '../utils/api';
import { envConfig } from './envConfig';

//mac dinh config la mock
let config = {
  get: mockGet,
  post: mockPost,
};

//neu khong phai mock thi switch sang DB
if (!envConfig.isDev) {
  config = {
    get: apiGet,
    post: apiPost,
  };
}
export const get = config.get;
export const post = config.post;
