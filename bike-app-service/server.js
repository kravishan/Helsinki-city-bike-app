const express = require('express');
const app = express();
const db = require('./db');
const journeyRoutes = require('./journeyRoutes');

app.use(express.json()); // Enable JSON body parsing

app.use('/api', journeyRoutes);

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
