import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig';
import { otherTokenMap } from '../routes/auth';

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

export const adminMiddleware = (req: any, res: any, next: any) => {
  const loginUser = checkOtherToken(req.signedCookies.otherToken);
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

const checkOtherToken = (otherToken: string) => {
  const loginUser = otherTokenMap[otherToken];
  console.log('otherTokenMap', JSON.stringify(otherTokenMap));
  if (loginUser && loginUser.expires > new Date()) {
    return loginUser;
  } else {
    return null;
  }
};

export const authenticated = [decodeLoginUser, authenticatedMiddleware];
