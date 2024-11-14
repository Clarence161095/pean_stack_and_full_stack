import { Router } from 'express';

const router = Router();

// Hello World
router.get('', (_req, res) => {
  console.log('Hello World 1');
  res.json({ message: 'Hello World 2' });
});

// Health check
router.get('/health', (_req, res) => {
  res.json({ message: 'Server is running' });
});

export default router;
