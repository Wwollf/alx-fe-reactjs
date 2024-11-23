import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // Import Outlet to render nested routes

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link> | {/* Link to ProfileDetails route */}
        <Link to="settings">Profile Settings</Link> {/* Link to ProfileSettings route */}
      </nav>

      {/* Outlet will render the matching child routes */}
      <Outlet />
    </div>
  );
};

export default Profile;


