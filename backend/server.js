// Backend: Node.js/Express
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());

// Hardcoded list of candidates
const candidates = [
  { id: 1, name: 'Alice Johnson', skills: 'React, Node.js', yearsOfExperience: 5 },
  { id: 2, name: 'Bob Smith', skills: 'Python, Django', yearsOfExperience: 3 },
  { id: 3, name: 'Charlie Brown', skills: 'Java, Spring', yearsOfExperience: 7 },
  { id: 4, name: 'Dana White', skills: 'JavaScript, Angular', yearsOfExperience: 4 },
  { id: 5, name: 'Eve Black', skills: 'C++, Algorithms', yearsOfExperience: 6 },
  { id: 6, name: 'Frank Blue', skills: 'PHP, Laravel', yearsOfExperience: 2 },
  { id: 7, name: 'Grace Green', skills: 'Ruby, Rails', yearsOfExperience: 8 },
  { id: 8, name: 'Hank Red', skills: 'Go, Kubernetes', yearsOfExperience: 5 },
  { id: 9, name: 'Ivy Yellow', skills: 'Swift, iOS', yearsOfExperience: 3 },
  { id: 10, name: 'Jack Orange', skills: 'Kotlin, Android', yearsOfExperience: 4 },
];

// API endpoint
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});