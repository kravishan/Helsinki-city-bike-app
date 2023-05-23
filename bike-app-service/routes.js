const express = require('express');
const router = express.Router();
const db = require('./db');

// Enable CORS for all routes
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Fetch all stations
router.get('/index', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM stations');
    const stations = result;
    res.json(stations);
  } catch (err) {
    console.error('Error fetching stations', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch all stations
router.get('/stations', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM stations');
    const stations = result;
    res.json(stations);
  } catch (err) {
    console.error('Error fetching stations', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch all journeys
router.get('/journeys', (req, res) => {
  const query = 'SELECT * FROM journeys';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching journeys:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// Add new station
router.post('/stations', async (req, res) => {
  try {
    const { name, address, city, capacity, operator, x, y } = req.body;

    const query = 'INSERT INTO journeys_db.stations (Name, Adress, Stad, Kapasiteet, Operaattor, x, y) VALUES (?, ?, ?, ?, ?, ?, ?)';
    await db.query(query, [name, address, city, capacity, operator, x, y]);

    res.status(201).json({ message: 'Station created successfully' });
  } catch (err) {
    console.error('Error creating station:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
