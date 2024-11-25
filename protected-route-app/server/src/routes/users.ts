import getClient from '../configs/db';
import { Router } from 'express';
import * as userController from '../controllers/user.controller';

// This is router for /api/users
const usersRouter = Router();

usersRouter.get('', userController.getAllUsers);
usersRouter.get('/:email', userController.getUser);
usersRouter.post('', userController.createUser);
usersRouter.put('/:email', userController.updateUser);
usersRouter.delete('/:email', userController.deleteUser);

export default usersRouter;
