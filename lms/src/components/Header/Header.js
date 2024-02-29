import React from 'react';
import './Header.css'; // Make sure to import the CSS file
import logo from './logo.jpeg'; // Import your logo here

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {/* Add other header content here if needed */}
    </header>
  );
};

export default Header;