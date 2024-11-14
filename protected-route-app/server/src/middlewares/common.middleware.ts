import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import { envConfig } from '../configs/envConfig';

const corsConfig = cors({
  origin: envConfig.CORS_LIST.split(','),
  credentials: true,
});

export const commonMiddlewares = [
  express.json(),
  bodyParser.json({ limit: '30mb' }),
  corsConfig,
  cookieParser(envConfig.COOKIE_SECRET),
];
