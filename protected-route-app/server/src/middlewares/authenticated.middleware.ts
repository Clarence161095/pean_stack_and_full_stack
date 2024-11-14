import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig';

export const decodeLoginUser = (req: any, res: any, next: any) => {
  if (req.signedCookies.token) {
    try {
      req.loginUser = jwt.verify(req.signedCookies.token, envConfig.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
  next();
};

export const authenticatedMiddleware = (req: any, res: any, next: any) => {
  const loginUser = req.loginUser;
  const isLogin = loginUser && loginUser.id;
  if (isLogin) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export const authenticated = [decodeLoginUser, authenticatedMiddleware];
