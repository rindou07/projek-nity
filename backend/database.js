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
            
            stmt.run('Tempe Kripik Niti 2', 'Tempe kripik yg gurih dan renyah', 30000, 'Makanan Kering', 1, '/tempe.webp');
            stmt.run('Nopia', 'Rasa brambang, gula jawa, coklat', 18000, 'Makanan Kering', 0, '/nopia.webp');
            stmt.run('Mino', 'Rasa coklat, brambang, gulajawa', 18000, 'Makanan Kering', 0, '/mino.webp');
            stmt.run('Kripik Dage', 'Kripik dagedengan rasa gurih manis', 22000, 'Makanan Kering', 0, '/kripik dage.webp');
            stmt.run('sale goreng wahyu', 'manis empuk tidak alot', 24000, 'Makanan Semi-Basah', 0, '/sale goreng wahyu.webp');
            stmt.run('Sale Oven', '', 23000, 'Makanan Semi-Basah', 0, '/sale oven.webp');
            stmt.run('Teng2', 'Teng2 kacang dan teng2 jahe', 25000, 'Makanan Kering', 0, '/teng teng.webp');
            stmt.run('Klanting', 'Rasa bawang saja', 15000, 'Makanan Kering', 0, '/klanting.webp');
            stmt.run('Sagon Ketan', 'Enak dan renyah', 25000, 'Makanan Kering', 0, '/sagon ketan.webp');
            stmt.run('Paket Kripik Isi 4', 'isi 4 bungkus kripik', 120000, 'Paket', 0, '/paket kripik isi 4.webp');
            stmt.run('Paket Kripik Isi 5', 'isi 5 bungkus kripik', 150000, 'Paket', 0, '/paket kripik isi 5.webp');
            
            stmt.run('Kripik Mas El', 'Kripik tempe dengan kemasan pouch mudah di bawa dan tidak mudah remuk', 17500, 'Makanan Kering', 0, '/kripik mas el.webp');
            stmt.run('Kacang Asin', 'Kacang asin mirasa putra', 23000, 'Makanan Kering', 0, '/kacang asin.webp');
            stmt.run('Klanting Tela', 'Gurih renyah1', 15000, 'Makanan Kering', 0, '/klanting tela.webp');
            stmt.run('Paket Besek Kecil Campur', '1kripik, 1 mino, 1 klanting', 65000, 'Paket', 0, '/paket besek kecil campur.webp');
            stmt.run('Krupuk Tengiri Sk Rasa', 'Kemasan besar 150gr', 25000, 'Makanan Kering', 0, '/krupuk tengiri sk rasa.webp');
            stmt.run('Basrengpedas Daun Jeruk', '', 18000, 'Makanan Kering', 0, '/basreng pedas daun jeruk.webp');
            stmt.run('Peyek Kacang Kulina', 'Kriyik dan gurih', 18000, 'Makanan Kering', 0, '/peyek kacang kulina.webp');
            stmt.run('Sale. Pisang Keju', 'Sale yg bertabur keju', 23000, 'Makanan Semi-Basah', 0, '/sale pisang keju.webp');
            stmt.run('Paket besek serba 2', '2 kripik, 2 mino/ nopia, 2 klanting tela', 130000, 'Paket', 0, '/paket besek serba 2.webp');
            stmt.run('Paket Kripik isi 3', 'isi 3 Bungkus Kripik', 90000, 'Paket', 0, '/paket kripik serba 3.webp');
            stmt.run('Paket kripik isi 10', 'isi 10 bungkus kripik', 300000, 'Paket', 0, '/paket kripik isi 10.webp');
            stmt.run('kripik pisang kepok', 'rasa gurih manis', 25000, 'Makanan Kering', 0, '/kripik pisang kepok.webp');
            
            stmt.finalize();
          }
        });
      }
    });
  }
});

export default db;
