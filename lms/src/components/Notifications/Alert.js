import React from 'react';
import './Alert.css'; // Import corresponding CSS file

const Alert = ({ message }) => {
  return (
    <div className="alert">
      <p>{message}</p>
    </div>
  );
};

export default Alert;
