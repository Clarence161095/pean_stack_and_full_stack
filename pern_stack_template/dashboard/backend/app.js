import express from 'express';
import './configs/dbConfig.js';
import { envConfig } from './configs/envConfig.js';
import { commonMiddlewares } from './middlewares/commonMiddleware.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import allRoute from './routes/allRoutes.js';

const app = express();

// Middlewares
app.use(commonMiddlewares);

// Routes
app.use(allRoute);

// Error handling
app.use(errorMiddleware);

app.listen(envConfig.PORT, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
