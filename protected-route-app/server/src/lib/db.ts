import { db } from '@vercel/postgres';
import { VercelPoolClient } from '@vercel/postgres';

export async function connectDB(): Promise<VercelPoolClient> {
  try {
    const client = await db.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

export async function disconnectDB(client: VercelPoolClient): Promise<void> {
  try {
    await client.release();
  } catch (error) {
    console.error('Error disconnecting from database:', error);
    throw error;
  }
}
