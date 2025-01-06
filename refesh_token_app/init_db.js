const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('example.db');

db.serialize(() => {
  db.run('DROP TABLE IF EXISTS tokens');
  db.run(`
    CREATE TABLE tokens (
      token TEXT PRIMARY KEY,
      ip TEXT,
      device TEXT
    )
  `);
});

db.close();