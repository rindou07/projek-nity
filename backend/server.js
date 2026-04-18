import express from 'express';
import cors from 'cors';
import db from './database.js';

const app = express();
const PORT = 3001; // backend port

app.use(cors());
app.use(express.json());

// Get all products or filter by category/search term
app.get('/api/products', (req, res) => {
  const { search, category } = req.query;
  let query = 'SELECT * FROM products WHERE 1=1';
  let params = [];

  if (category && category !== 'Semua') {
    query += ' AND category = ?';
    params.push(category);
  }

  if (search) {
    query += ' AND (name LIKE ? OR description LIKE ?)';
    params.push(`%${search}%`, `%${search}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ products: rows });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
