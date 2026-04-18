import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, 'niti2.db');

// Create connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    
    // Create products table
    db.run(`CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price INTEGER NOT NULL,
      category TEXT NOT NULL,
      isBestseller BOOLEAN DEFAULT 0,
      imageUrl TEXT
    )`, (err) => {
      if (err) {
        console.error('Error creating table', err.message);
      } else {
        // Seed DB if empty
        db.get('SELECT count(*) as count FROM products', (err, row) => {
          if (err) return;
          if (row.count === 0) {
            console.log('Seeding initial products data...');
            const stmt = db.prepare('INSERT INTO products (name, description, price, category, isBestseller, imageUrl) VALUES (?, ?, ?, ?, ?, ?)');
            
            stmt.run('Keripik Tempe Niti 2', 'Keripik tempe gurih dan renyah, best seller dari Niti 2.', 15000, 'Makanan', 1, 'https://picsum.photos/seed/tempe/400/300');
            stmt.run('Gethuk Goreng Sokaraja', 'Gethuk goreng manis legit khas Purwokerto.', 20000, 'Makanan', 0, 'https://picsum.photos/seed/gethuk/400/300');
            stmt.run('Mendoan Crispy', 'Tepung mendoan siap goreng yang praktis.', 12000, 'Makanan', 1, 'https://picsum.photos/seed/mendoan/400/300');
            stmt.run('Sirup Kopi Murni', 'Sirup rasa kopi autentik yang menyegarkan.', 35000, 'Minuman', 0, 'https://picsum.photos/seed/kopi/400/300');
            stmt.run('Kaos Purwokerto', 'Kaos cendera mata khas Purwokerto yang nyaman.', 55000, 'Souvenir', 0, 'https://picsum.photos/seed/kaos/400/300');
            stmt.run('Gantungan Kunci Niti', 'Gantungan kunci kayu ukir manual.', 5000, 'Souvenir', 0, 'https://picsum.photos/seed/gantungan/400/300');
            
            stmt.finalize();
          }
        });
      }
    });
  }
});

export default db;
