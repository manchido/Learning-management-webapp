import React, { useState } from 'react';
import './RegistrationForm.css'; // Import corresponding CSS file

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');



  const validateForm = () => {
    let isValid = true;
  
    // Full Name validation
    if (!fullName.trim()) {
      setFullNameError('Full Name is required');
      isValid = false;
    } else {
      setFullNameError('');
    }
  
    // Email validation
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  if (validateForm()) {
    // Add registration logic here
    console.log('Form is valid');
  }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Registration</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {fullNameError && <div className="error-message">{fullNameError}</div>}
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
