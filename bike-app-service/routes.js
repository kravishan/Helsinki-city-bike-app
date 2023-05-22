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

module.exports = router;