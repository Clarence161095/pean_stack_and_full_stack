// src/migrations/scripts/002_add_items_indexes.ts
import { VercelPoolClient } from '@vercel/postgres';

export async function up(client: VercelPoolClient) {
  await client.sql`
    -- add age column to items table
    ALTER TABLE items ADD COLUMN age INT;
  `;
}

export async function down(client: VercelPoolClient) {
  await client.sql`
    ALTER TABLE items DROP COLUMN age;
  `;
}
