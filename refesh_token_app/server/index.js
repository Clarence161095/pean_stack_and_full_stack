const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const authRoutes = require('./routes/auth');

const db = new sqlite3.Database('database.sqlite');

// Create tables if not exist
db.run(`CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
)`);
db.run(`CREATE TABLE IF NOT EXISTS tokens(
  token TEXT PRIMARY KEY
)`);

app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);

app.locals.db = db; // make DB accessible

app.listen(4000, () => {
  console.log('Server running on port 4000');
});