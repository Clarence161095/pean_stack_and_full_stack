import { Router } from 'express';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig.js';
import User from '../models/user.js';
import { clearCookie } from '../utils/auth.js';

const authRoute = Router();

authRoute.post('/sso-login', async (req, res) => {
  const { accessToken, type = 'google' } = req.body;
  if (!accessToken) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    // use firebase verifyIdToken to verify token
    const loginUser = await admin.auth().verifyIdToken(accessToken);

    // If loginUser.email is not exist in database, create new user
    const user = await User.findOne({
      email: loginUser.email,
      type
    });

    if (!user) {
      const newUser = new User({
        email: loginUser.email,
        type,
        displayName: loginUser.name,
        avatar: loginUser.picture,
      });
      await newUser.save();
    }

    // Create jwt token and save in cookie in 1 day
    const jwtToken = jwt.sign(
      {
        id: user._id,
        email: loginUser.email,
        displayName: loginUser.name,
        avatar: loginUser.picture,
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
    return res.status(401).send({ message: 'Unauthorized' });
  }
});

authRoute.get('/logout', (req, res) => {
  clearCookie(res);
  res.send({ message: 'Logout success' });
});

export default authRoute;
