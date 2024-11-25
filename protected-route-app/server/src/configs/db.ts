import { VercelPoolClient } from '@vercel/postgres';
import { db } from '@vercel/postgres';
import dotenv from 'dotenv';
dotenv.config();

let client: VercelPoolClient;

export async function connectDB(retries = 5): Promise<any> {
  while (retries) {
    try {
      client = await db.connect();
      console.log('Connected to database successfully');
      return client;
    } catch (error) {
      console.error('Error connecting to database:', error);
      retries -= 1;
      console.log(`Retries left: ${retries}`);
      if (client) {
        await disconnectDB(client);
      }
      if (retries === 0) {
        throw error;
      }
      await new Promise((res) => setTimeout(res, 5000)); // wait for 5 seconds before retrying
    }
  }
}

export async function disconnectDB(client: VercelPoolClient): Promise<void> {
  try {
    await client.release();
    console.log('Disconnected from database successfully');
  } catch (error) {
    console.error('Error disconnecting from database:', error);
  }
}

const getClient = async () => {
  if (!client) {
    client = (await connectDB()) as VercelPoolClient;
  }
  return client;
};

export const query = async (query: { sql: string; values?: any[] }) => {
  const client = await getClient();
  const { sql, values = [] } = query;
  const result = await client.query(sql, values);
  return result;
};

export const readOnlyQuery = async (query: { sql: string; values?: any[] }) => {
  // This client is from the database pool, so it's read-only
  const client = await getClient(); // Change this line
  const { sql, values = [] } = query;
  const result = await client.query(sql, values);
  return result;
};

export default getClient;
