// src/migrations/scripts/002_add_items_indexes.ts
import { VercelPoolClient } from '@vercel/postgres';

export async function up(client: VercelPoolClient) {
  await client.sql`
    ALTER TABLE protected_route_app.users ADD COLUMN hyouji_name TEXT;
    UPDATE protected_route_app.users SET hyouji_name = display_name;
  `;
}

export async function down(client: VercelPoolClient) {
  await client.sql`
    ALTER TABLE protected_route_app.users DROP COLUMN hyouji_name;
  `;
}
