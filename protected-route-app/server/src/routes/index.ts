import { Router } from 'express';
import usersRouter from './users';
import authRouter from './auth';
import { authenticated } from '../middlewares/authenticated.middleware';

const router = Router();

router.use('/auth', authRouter);

// All routes in this router will require authentication
router.use('/users', authenticated, usersRouter);

export default router;
