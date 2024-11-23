import React from 'react';
import { Outlet, Link } from 'react-router-dom';  // Import necessary React Router components

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |  {/* Link to ProfileDetails route */}
        <Link to="settings">Profile Settings</Link>  {/* Link to ProfileSettings route */}
      </nav>

      {/* This is where nested routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default Profile;


