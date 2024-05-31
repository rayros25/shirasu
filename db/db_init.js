const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./shirasu.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, email TEXT UNIQUE)`, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log('users table created or already exists.');
});

db.run(`CREATE TABLE IF NOT EXISTS manga (id INTEGER PRIMARY KEY, manga_id TEXT UNIQUE, latest_chapter_id TEXT UNIQUE)`, (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log('manga table created or already exists.');
});

db.run(`INSERT INTO manga (manga_id, latest_chapter_id) VALUES (?, ?)`, ['f5bf9cc3-d003-47fe-bc76-99774b2a0562', '86364498-c9af-4382-97ef-b75dc0608069'], (err) => {
    if (err) {
      return console.log(err.message);
    }
    console.log('inserted into manga.');
});