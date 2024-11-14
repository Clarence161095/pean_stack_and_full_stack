import { Router } from 'express';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig';
import * as userService from '../services/user.service';

// /api/auth
const authRoute = Router();

authRoute.post('/sso-login', async (req: any, res: any) => {
  const { accessToken } = req.body;
  if (!accessToken) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    // use firebase verifyIdToken to verify token
    const loginUser = await admin.auth().verifyIdToken(accessToken);

    const { uid, email, name, picture } = loginUser;

    // If loginUser.email is not exist in database, create new user
    const { data: user } = (await userService.getUserByEmail(email as string)) as any;

    if (!user.id) {
      await userService.createUser({
        uid: uid as string,
        email: email as string,
        displayName: name as string,
        photoURL: picture as string,
      });
    }

    // Create jwt token and save in cookie in 1 day
    const jwtToken = jwt.sign(
      {
        id: user.id,
        uid: uid,
        email: email,
        displayName: name,
        photoURL: picture,
        role: 'user',
      },
      envConfig.JWT_SECRET,
      {
        expiresIn: '1day',
      },
    );

    res.cookie('token', jwtToken, {
      httpOnly: true,
      secure: envConfig.ENV === 'product',
      sameSite: 'lax',
      signed: true,
    });

    return res.send({ message: 'Login success' });
  } catch (error) {
    console.log('error', error);
    return res.status(401).send({ message: 'Unauthorized' });
  }
});

authRoute.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.send({ message: 'Logout success' });
});

export default authRoute;
