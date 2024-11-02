// src/scripts/migrate.ts
import { migrate } from '../migrations';

async function runMigrations() {
  try {
    const direction = (process.argv[2] as 'up' | 'down') || 'up';
    await migrate(direction);
    console.log('Migrations completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

runMigrations();
