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
            
            stmt.run('Tempe Kripik Niti 2', 'tempe kripik yang gurih, renyah dan bergizi, best seller dari niti 2', 30000, 'Makanan Kering', 1, 'https://picsum.photos/seed/tempekripik/400/300');
            stmt.run('Nopia', 'rasa gula jawa, coklat', 18000, 'Makanan Kering', 0, 'https://picsum.photos/seed/nopia/400/300');
            stmt.run('Mino', 'rasa coklat, gula jawa', 18000, 'Makanan Kering', 0, 'https://picsum.photos/seed/mino/400/300');
            stmt.run('Kripik Dage', 'kripik dage dengan rasa gurih manis', 22000, 'Makanan Kering', 0, 'https://picsum.photos/seed/kripikdage/400/300');
            stmt.run('Sale Goreng', 'manis empuk tidak alot', 24000, 'Makanan Semi-Basah', 0, 'https://picsum.photos/seed/salegoreng/400/300');
            stmt.run('Sale Oven', '', 23000, 'Makanan Semi-Basah', 0, 'https://picsum.photos/seed/saleoven/400/300');
            stmt.run('Teng-Teng', 'teng2 kacang dan teng2 jahe', 25000, 'Makanan Kering', 0, 'https://picsum.photos/seed/tengteng/400/300');
            stmt.run('Klanting', 'rasa bawang', 15000, 'Makanan Kering', 0, 'https://picsum.photos/seed/klanting/400/300');
            stmt.run('Sagon Ketan', 'enak dan renyah', 25000, 'Makanan Kering', 0, 'https://picsum.photos/seed/sagon/400/300');
            stmt.run('Paket Kripik Isi 4', 'isi 4 bungkus kripik', 120000, 'Makanan Kering', 0, 'https://picsum.photos/seed/paket4/400/300');
            stmt.run('Paket Kripik Isi 5', 'isi 5 bungkus kripik free besek', 150000, 'Makanan Kering', 0, 'https://picsum.photos/seed/paket5/400/300');
            
            stmt.finalize();
          }
        });
      }
    });
  }
});

export default db;
