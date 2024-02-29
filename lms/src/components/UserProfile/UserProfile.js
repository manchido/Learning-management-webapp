import React from 'react';
import './UserProfile.css'; // Import corresponding CSS file

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
