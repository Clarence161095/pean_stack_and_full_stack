import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig';

export const decodeLoginUser = (req: any, res: any, next: any) => {
  if (req.signedCookies.token) {
    try {
      req.loginUser = jwt.verify(req.signedCookies.token, envConfig.JWT_SECRET);
      if (req.loginUser.exp < new Date().getTime() / 1000) {
        res.clearCookie('token');
        return res.status(401).json({ message: 'Token expired' });
      }
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
  next();
};

export const isLogin = (req: any, res: any, next: any) => {
  const loginUser = req.loginUser;
  const isLogin = loginUser && loginUser.id;
  if (isLogin) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export const isAdmin = (req: any, res: any, next: any) => {
  const loginUser = req.loginUser;
  if (!loginUser) {
    res.clearCookie('otherToken');
    return res.status(401).json({ message: 'Unauthorized Expired' });
  }
  const isAdmin = loginUser && loginUser?.role === 'admin';
  if (isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Forbidden' });
  }
};

export const isAuthenticated = [decodeLoginUser, isLogin];
