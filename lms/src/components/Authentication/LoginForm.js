import React, { useState } from 'react';
import './LoginForm.css'; // Import corresponding CSS file

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
  
    if (!username.trim()) {
      setUsernameError('Username is required');
      isValid = false;
    } else {
      setUsernameError('');
    }
  
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Add authentication logic here
      console.log('Form is valid');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {usernameError && <div className="error-message">{usernameError}</div>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

        {passwordError && <div className="error-message">{passwordError}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
