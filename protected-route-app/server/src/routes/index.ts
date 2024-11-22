import { Router } from 'express';
import usersRouter from './users';
import authRouter from './auth';
import {
  adminMiddleware,
  authenticated,
  googleAdminMiddleware,
  googleAuthMiddleware,
} from '../middlewares/authenticated.middleware';

const router = Router();

router.use('/auth', authRouter);

// All routes in this router will require authentication
router.get('/getInfo', authenticated, (req: any, res: any) => {
  const info = req.loginUser;
  res.json(info);
});

router.get('/getInfoGoogle', googleAuthMiddleware, (req: any, res: any) => {
  const info = req.loginUser || {};
  return res.status(200).json({
    id: info.email,
  });
});

router.get(
  '/adminGetInfoGoogle',
  googleAuthMiddleware,
  googleAdminMiddleware,
  (req: any, res: any) => {
    const info = req.loginUser || {};
    return res.status(200).json(info);
  },
);

router.use('/users', authenticated, usersRouter);
router.use('/hrs', authenticated, adminMiddleware, usersRouter);

export default router;
