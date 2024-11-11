import express from 'express';
import router from './routes';

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

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
