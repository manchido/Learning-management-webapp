import React from 'react';
import './FileList.css'; // Import corresponding CSS file

const FileList = ({ files }) => {
  return (
    <div className="file-list">
      <h3>Files</h3>
      <ul>
        {files.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
