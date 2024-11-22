import { connectDB, disconnectDB } from '../configs/db';
import * as createUsersTable from './scripts/001_create_users_table';
import * as addSoftDeleteUser from './scripts/002_add_soft_delete_user';
import * as addHyoujiName from './scripts/003_add_hyouji_name';
import * as addRole from './scripts/004_add_role';

interface MigrationScript {
  up: Function;
  down: Function;
}

export const migrations: MigrationScript[] = [
  createUsersTable,
  // Thêm các migration scripts khác ở đây
  addSoftDeleteUser,
  addHyoujiName,
  addRole,
];

export async function migrate(direction: 'up' | 'down' = 'up') {
  const client = await connectDB();

  try {
    // Tạo bảng migrations nếu chưa tồn tại
    await client.sql`
      CREATE TABLE IF NOT EXISTS protected_route_app.migrations (
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
          SELECT id FROM protected_route_app.migrations WHERE name = ${migrationName}
        `;

        if (rows.length === 0) {
          console.log(`Executing migration: ${migrationName}`);
          await migration.up(client);
          await client.sql`
            INSERT INTO protected_route_app.migrations (name) VALUES (${migrationName})
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
          DELETE FROM protected_route_app.migrations WHERE name = ${migrationName}
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
