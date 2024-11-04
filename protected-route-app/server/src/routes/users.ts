import getClient from '@/configs/db';
import { Router } from 'express';

// This is router for /api/users
const usersRouter = Router();

usersRouter.get('', async (req: any, res: any) => {
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      SELECT * FROM protected_route_app.users ORDER BY created_at DESC
    `;
    res.json({ data: rows });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

usersRouter.get('/:email', async (req: any, res: any) => {
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      SELECT * FROM protected_route_app.users WHERE email = ${req.params.email}
    `;
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

usersRouter.post('', async (req: any, res: any) => {
  const { email, display_name, photo_url, uid } = req.body;
  const client = await getClient();
  try {
    // Check if email exists
    const { rows: existingUsers } = await client.sql`
      SELECT * FROM protected_route_app.users WHERE email = ${email}
    `;
    if (existingUsers.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const { rows } = await client.sql`
      INSERT INTO protected_route_app.users (email, display_name, photo_url, uid)
      VALUES (${email}, ${display_name}, ${photo_url || null}, ${uid})
      RETURNING *
    `;
    res.status(201).json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

usersRouter.put('/:id', async (req: any, res: any) => {
  const { display_name, photo_url } = req.body;
  const client = await getClient();
  try {
    const { rows } = await client.sql`
        UPDATE protected_route_app.users
        SET display_name = ${display_name}, photo_url = ${photo_url || null}
        WHERE id = ${req.params.id}
        RETURNING *
      `;
    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

usersRouter.delete('/:id', async (req: any, res: any) => {
  const client = await getClient();
  try {
    const { rows } = await client.sql`
      DELETE FROM protected_route_app.users WHERE id = ${req.params.id}
      RETURNING *
    `;
    res.json({ data: rows[0] });
  } catch (error) {
    res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
  }
});

export default usersRouter;
