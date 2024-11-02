// src/migrations/scripts/002_add_items_indexes.ts
import { VercelPoolClient } from '@vercel/postgres';

export async function up(client: VercelPoolClient) {
  await client.sql`
    INSERT INTO items (name, description) VALUES ('item1', 'description1');
    CREATE INDEX IF NOT EXISTS idx_items_name ON items(name);
  `;
}

export async function down(client: VercelPoolClient) {
  await client.sql`
    DROP INDEX IF EXISTS idx_items_name;
  `;
}
