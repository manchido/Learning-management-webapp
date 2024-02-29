import React from 'react';
import './TestList.css'; // Import corresponding CSS file

const TestList = ({ tests }) => {
  return (
    <div className="test-list">
      <h2>Tests</h2>
      <ul>
        {tests.map((test, index) => (
          <li key={index}>{test}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestList;
