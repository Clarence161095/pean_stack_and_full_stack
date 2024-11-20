import { Router } from 'express';
import usersRouter from './users';
import authRouter from './auth';
import { adminMiddleware, authenticated } from '../middlewares/authenticated.middleware';

const router = Router();

router.use('/auth', authRouter);

// All routes in this router will require authentication
router.get('/getInfo', authenticated, (req: any, res: any) => {
  const info = req.loginUser;
  res.json(info);
});

router.use('/users', authenticated, usersRouter);
router.use('/hrs', authenticated, adminMiddleware, usersRouter);

export default router;
