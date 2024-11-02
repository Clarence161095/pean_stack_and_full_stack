// src/migrations/index.ts
import { connectDB, disconnectDB } from '../lib/db';
import * as createItemsTable from './scripts/001_create_items_table';
import * as addItemsIndexes from './scripts/002_add_items_indexes';
import * as addAgeColumn from './scripts/003_add_age_column';
import * as add10SampleRecordForItems from './scripts/004_add_10_sample_record_for_items';

interface MigrationScript {
  up: Function;
  down: Function;
}

export const migrations: MigrationScript[] = [
  createItemsTable,
  // Thêm các migration scripts khác ở đây
  addItemsIndexes,
  addAgeColumn,
  add10SampleRecordForItems,
];

export async function migrate(direction: 'up' | 'down' = 'up') {
  const client = await connectDB();

  try {
    // Tạo bảng migrations nếu chưa tồn tại
    await client.sql`
      CREATE TABLE IF NOT EXISTS migrations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    if (direction === 'up') {
      for (let i = 0; i < migrations.length; i++) {
        const migration = migrations[i];
        const migrationName = `migration_${i + 1}`;

        // Kiểm tra xem migration đã được thực hiện chưa
        const { rows } = await client.sql`
          SELECT id FROM migrations WHERE name = ${migrationName}
        `;

        if (rows.length === 0) {
          console.log(`Executing migration: ${migrationName}`);
          await migration.up(client);
          await client.sql`
            INSERT INTO migrations (name) VALUES (${migrationName})
          `;
          console.log(`Completed migration: ${migrationName}`);
        }
      }
    } else {
      // Rollback migrations theo thứ tự ngược lại
      for (let i = migrations.length - 1; i >= 0; i--) {
        const migration = migrations[i];
        const migrationName = `migration_${i + 1}`;

        console.log(`Rolling back migration: ${migrationName}`);
        await migration.down(client);
        await client.sql`
          DELETE FROM migrations WHERE name = ${migrationName}
        `;
        console.log(`Rolled back migration: ${migrationName}`);
      }
    }
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await disconnectDB(client);
  }
}
