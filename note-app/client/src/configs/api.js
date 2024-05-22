import { mockGet, mockPost } from '../mock/api';
import { apiGet, apiPost } from '../utils/api';
import { envConfig } from '../configs/envConfig';

let config = {
  get: mockGet,
  post: mockPost,
};

if (envConfig.env !== 'local_dev') {
  config = {
    get: apiGet,
    post: apiPost,
  };
}

export const get = config.get;
export const post = config.post;
