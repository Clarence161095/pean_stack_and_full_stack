import axios from 'axios';
import { envConfig } from '../configs/envConfig';

const prefixApi = envConfig.host + ':' + envConfig.port;

const apiPost = async (url, body) => {
  axios.defaults.withCredentials = true;
  const response = await axios.post(prefixApi + url, body, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  if (response.data) return response.data;
};

const apiGet = async (url) => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(prefixApi + url, {
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
  if (response.data) return response.data;
};

export { apiGet, apiPost, prefixApi };
