const express = require('express');
const candidates = require('./candidates.js');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});