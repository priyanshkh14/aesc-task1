import React from 'react';

const CandidateTable = ({ candidates, filteredCandidates }) => {
  return (
    <table className="candidate-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Skills</th>
          <th>Years of Experience</th>
        </tr>
      </thead>
      <tbody>
        {filteredCandidates.map((candidate) => (
          <tr key={candidate.id}>
            <td>{candidate.name}</td>
            <td>{candidate.skills}</td>
            <td>{candidate.yearsOfExperience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CandidateTable;
