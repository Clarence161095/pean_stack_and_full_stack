import { Router } from 'express';
import { authenticated } from '../middlewares/authenticated.js';
import apiRoute from './apiRoute.js';
import authRoute from './authRoute.js';

const allRoute = Router();

allRoute.use(authRoute);

allRoute.use('/api', authenticated, apiRoute);

export default allRoute;
