// src/migrations/scripts/002_add_items_indexes.ts
import { VercelPoolClient } from '@vercel/postgres';

export async function up(client: VercelPoolClient) {
  await client.sql`
    INSERT INTO items (name, description, age)
    VALUES
      ('Item 1', 'Description for Item 1', 10),
      ('Item 2', 'Description for Item 2', 20),
      ('Item 3', 'Description for Item 3', 30),
      ('Item 4', 'Description for Item 4', 40),
      ('Item 5', 'Description for Item 5', 50),
      ('Item 6', 'Description for Item 6', 60),
      ('Item 7', 'Description for Item 7', 70),
      ('Item 8', 'Description for Item 8', 80),
      ('Item 9', 'Description for Item 9', 90),
      ('Item 10', 'Description for Item 10', 100);
  `;
}

export async function down(client: VercelPoolClient) {
  await client.sql`
    DELETE FROM items WHERE name IN (
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
      'Item 5',
      'Item 6',
      'Item 7',
      'Item 8',
      'Item 9',
      'Item 10'
    );
  `;
}
