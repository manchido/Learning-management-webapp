// Navbar.js
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="path-to-your-logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">About</a></li>
        <li className="profile">
          <img src="path-to-profile-image.png" alt="Profile" className="dropdown-toggle" />
          <div className="dropdown-content">
            <a href="#">Profile</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;