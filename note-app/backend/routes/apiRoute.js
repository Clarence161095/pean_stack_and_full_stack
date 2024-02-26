import { Router } from 'express';

const apiRoute = Router();

apiRoute.get('/user-info', (req, res) => {
  const loginUser = req.loginUser;
  res.send({ loginUser });
});

export default apiRoute;
