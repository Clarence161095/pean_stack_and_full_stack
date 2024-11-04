import { VercelPoolClient } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import dotenv from 'dotenv';
dotenv.config();

let client: VercelPoolClient;

async function connectDB(): Promise<VercelPoolClient> {
  try {
    const client = await db.connect();
    console.log('Connected to database successfully');
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

const getClient = async () => {
  if (!client) {
    client = await connectDB();
  }
  return client;
};

export default getClient;
