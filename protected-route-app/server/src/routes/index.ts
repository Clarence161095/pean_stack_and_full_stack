import { Router } from 'express';
import { isAuthenticated } from '../middlewares/authenticated.middleware';
import authRouter from './auth';
import usersRouter from './users';

const router = Router();

router.use('/auth', authRouter);

// All routes in this router will require authentication
router.use('/users', isAuthenticated, usersRouter);

export default router;
