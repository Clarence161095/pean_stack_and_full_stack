import bcrypt from 'bcrypt';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { envConfig } from '../configs/envConfig.js';

const authRoute = Router();

authRoute.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.send('User already exist');
  }
  // encrypt password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log('register hashedPassword', hashedPassword);
  const newUser = new User({
    email,
    password: hashedPassword,
  });
  await newUser.save();
  res.send('User created');
});

authRoute.post('/login', async (req, res) => {
  const { email, password } = req.body;
  // check if user exist
  const user = await User.findOne({ email });
  if (!user) {
    return res.send('Invalid login');
  }
  // check if password is correct
  // TODO: Fix this
  const isPasswordCorrect = bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    return res.send('Invalid login');
  }
  // Create jwt token and save in cookie
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    envConfig.JWT_SECRET,
  );

  console.log('token', token);
  res.cookie('token', token, {
    httpOnly: true,
  });

  return res.send('Login success');
});

export default authRoute;
