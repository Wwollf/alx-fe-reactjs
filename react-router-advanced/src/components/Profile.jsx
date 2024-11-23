import React from 'react';
import { Outlet, Link } from 'react-router-dom';  // Import Outlet for nested routes

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link> | {/* Link to ProfileDetails route */}
        <Link to="settings">Profile Settings</Link> {/* Link to ProfileSettings route */}
      </nav>

      {/* The Outlet renders the nested route's content */}
      <Outlet />
    </div>
  );
};

export default Profile;




