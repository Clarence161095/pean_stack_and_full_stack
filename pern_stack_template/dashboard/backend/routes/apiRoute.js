import { Router } from 'express';

const apiRoute = Router();

apiRoute.get('/users', (req, res) => {
  res.send('Users route');
});

export default apiRoute;
