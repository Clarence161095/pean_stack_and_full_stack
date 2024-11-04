// src/migrations/scripts/001_create_items_table.ts
import { VercelPoolClient } from '@vercel/postgres';

export async function up(client: VercelPoolClient) {
  await client.sql`
    CREATE TABLE IF NOT EXISTS protected_route_app.users (
      id SERIAL PRIMARY KEY,
      uid TEXT NOT NULL,
      email TEXT NOT NULL,
      display_name TEXT NOT NULL,
      photo_url TEXT,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    );
  `;
}

export async function down(client: VercelPoolClient) {
  await client.sql`
    DROP TABLE IF EXISTS protected_route_app.users;
  `;
}