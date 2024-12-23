import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandidateTable from './components/CandidateTable';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    axios.get('http://localhost:5001/api/candidates')
      .then((response) => {
        setCandidates(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSort = () => {
    const sortedCandidates = [...candidates].sort((a, b) => {
      return sortOrder === 'asc'
        ? a.yearsOfExperience - b.yearsOfExperience
        : b.yearsOfExperience - a.yearsOfExperience;
    });
    setCandidates(sortedCandidates);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm) ||
    candidate.skills.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="App">
      <h1>Candidate List Viewer</h1>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <button onClick={handleSort}>
        Sort by Years of Experience ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
      </button>
      <CandidateTable candidates={candidates} filteredCandidates={filteredCandidates} />
    </div>
  );
};

export default App;
