import express from 'express';
import { commonMiddlewares } from './middlewares/common.middleware';
import router from './routes';
import commonRouter from './routes/common';
import './configs/firebase-config';
import { envConfig } from './configs/envConfig';

const app = express();
app.use(commonMiddlewares);
app.use(commonRouter);
app.use('/api', router);

const port = envConfig.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
