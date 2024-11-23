import React from 'react';
import { Outlet, Link } from 'react-router-dom';  // Import Outlet and Link for nested routing

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |  {/* Link to ProfileDetails */}
        <Link to="settings">Profile Settings</Link>  {/* Link to ProfileSettings */}
      </nav>

      {/* The nested route content will render here */}
      <Outlet />
    </div>
  );
};

export default Profile;


