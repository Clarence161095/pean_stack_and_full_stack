import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig';
import { otherTokenMap } from '../routes/auth';
import * as userService from '../services/user.service';

export const decodeLoginUser = (req: any, res: any, next: any) => {
  if (req.signedCookies.token) {
    try {
      req.loginUser = jwt.verify(req.signedCookies.token, envConfig.JWT_SECRET);
      // check if token is expired
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

export const googleAuthMiddleware = async (req: any, res: any, next: any) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const accessToken = bearerToken.split(' ')[1];
  let loginUser: any = {};
  try {
    loginUser = await admin.auth().verifyIdToken(accessToken);
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  const { data: user } = (await userService.getUserByEmail(loginUser.email as string)) as any;
  req.loginUser = {
    id: user.id,
    email: user.email,
    displayName: user.display_name,
    photoURL: user.photo_url,
    role: user.role,
  };
  next();
};

export const googleAdminMiddleware = (req: any, res: any, next: any) => {
  const loginUser = req.loginUser;
  const isAdmin = loginUser && loginUser.role === 'admin';
  if (isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Forbidden' });
  }
};

export const authenticated = [decodeLoginUser, authenticatedMiddleware];
