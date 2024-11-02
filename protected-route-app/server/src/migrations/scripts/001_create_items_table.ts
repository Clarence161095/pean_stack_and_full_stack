// src/migrations/scripts/001_create_items_table.ts
import { VercelPoolClient } from '@vercel/postgres';

export async function up(client: VercelPoolClient) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS items (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );

    CREATE OR REPLACE FUNCTION update_updated_at_column()
    RETURNS TRIGGER AS $$
    BEGIN
        NEW.updated_at = NOW();
        RETURN NEW;
    END;
    $$ language 'plpgsql';

    CREATE TRIGGER update_items_updated_at
        BEFORE UPDATE ON items
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
  `;
}

export async function down(client: VercelPoolClient) {
  await client.sql`
    DROP TRIGGER IF EXISTS update_items_updated_at ON items;
    DROP FUNCTION IF EXISTS update_updated_at_column;
    DROP TABLE IF EXISTS items;
  `;
}