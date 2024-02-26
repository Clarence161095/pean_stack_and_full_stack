import bcrypt from 'bcrypt';
import { Router } from 'express';
import admin from 'firebase-admin';
import jwt from 'jsonwebtoken';
import { envConfig } from '../configs/envConfig.js';
import User from '../models/user.js';
import { clearCookie, validateRegisterInput } from '../utils/auth.js';

const authRoute = Router();

authRoute.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).send({ message: 'User already exist' });
  }
  // validate email and password
  const error = validateRegisterInput(email, password);
  if (error) {
    return res.status(400).send({ message: error });
  }

  // encrypt password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashedPassword,
    type: 'local',
  });
  await newUser.save();
  res.send({ message: 'Register success' });
});

authRoute.get('/logout', (req, res) => {
  clearCookie(res);
  res.send({ message: 'Logout success' });
});

authRoute.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: 'Invalid login' });
  }
  // check if password is correct
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    clearCookie(res);
    return res.status(400).send({ message: 'Invalid login' });
  }

  // Xác thực thành công

  // Create jwt token and save in cookie
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: 'user',
    },
    envConfig.JWT_SECRET,
    {
      expiresIn: '1day',
    },
  );

  res.cookie('token', token, {
    httpOnly: true /* httpOnly: true will prevent javascript from accessing cookies */,
    secure: envConfig.ENV === 'product' /* secure: true will only send cookie over https */,
    sameSite: 'lax' /* sameSite: lax will prevent csrf attack */,
    signed: true /* signed: true will use secret key to encrypt cookie */,
  });

  return res.send({ message: 'Login success' });
});

authRoute.post('/sso-login', async (req, res) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
  const token = bearerToken.split(' ')[1];
  // This token is firebase token
  try {
    // use firebase verifyIdToken to verify token
    const loginUser = await admin.auth().verifyIdToken(token);

    // If loginUser.email is not exist in database, create new user
    const user = await User.findOne({
      email: loginUser.email,
      type: 'firebase',
    });

    if (!user) {
      const newUser = new User({
        email: loginUser.email,
        type: 'firebase',
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

export default authRoute;
