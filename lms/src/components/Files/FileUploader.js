import React, { useState } from 'react';
import './FileUploader.css'; // Import corresponding CSS file

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // Implement file upload logic here
    console.log('File uploaded:', selectedFile);
  };

  return (
    <div className="file-uploader">
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
