import { connectDB } from '@/lib/db';
import { VercelPoolClient } from '@vercel/postgres';

let client: VercelPoolClient;

const getClient = async () => {
  if (!client) {
    client = await connectDB();
  }
  return client;
};

export default getClient;
