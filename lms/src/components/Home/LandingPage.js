import React from 'react';
import { Link } from "react-router-dom"
import './LandingPage.css'; // Import corresponding CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="welcome-message">
        <h1>Welcome to Our Learning Management System</h1>
        <p>
          Our platform provides a comprehensive solution for managing courses,
          delivering content, and tracking student progress. Join us to
          revolutionize the way education is delivered.
        </p>
      </div>
      <div className="login-options">
        <Link to="/teacher-login" className="login-button teacher">
          Teacher Login
        </Link>
        <Link to="/student-login" className="login-button student">
          Student Login
        </Link>
      </div>
      <div className="registration-options">
        <p>New to our platform?</p>
        <Link to="/teacher-registration" className="registration-link teacher">
          Teacher Registration
        </Link>
        <Link to="/student-registration" className="registration-link student">
          Student Registration
        </Link>
      </div>
    </div>
  );
};


export default LandingPage;
