import express from 'express';
import { commonMiddlewares } from './middlewares/common.middleware';
import router from './routes';
import commonRouter from './routes/common';
import './configs/firebase-config';
import { envConfig } from './configs/envConfig';

const app = express();
app.use(express.json());

app.get('', (req, res) => {
  console.log('Hello World 1');
  res.json({ message: 'Hello World 2' });
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ message: 'Server is running' });
});

// Apply common middlewares
app.use(commonMiddlewares);

// Apply routes
app.use(commonRouter);
app.use('/api', router);

const port = envConfig.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
