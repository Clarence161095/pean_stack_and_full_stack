import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig.js';
import { getCookies } from '../utils/auth.js';

export const decodeLoginUser = (req, res, next) => {
  const token = getCookies(req).token;
  if (token) {
    try {
      req.loginUser = jwt.verify(token, envConfig.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
  console.log('req.loginUser', req.loginUser);
  next();
};

export const authenticatedMiddleware = (req, res, next) => {
  const loginUser = req.loginUser;
  const isLogin = loginUser && loginUser.id;
  if (isLogin) {
    next();
  } else {
    res.send('You are not authenticated. Please login first.');
  }
};

export const authenticated = [decodeLoginUser, authenticatedMiddleware];
