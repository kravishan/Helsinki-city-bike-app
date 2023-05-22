const express = require('express');
const app = express();
const db = require('./db');
const Routes = require('./routes');

app.use(express.json()); // Enable JSON body parsing

app.use('/api', Routes);

app.listen(3001, () => {
  console.log('Backend server is running on port 3001');
});
