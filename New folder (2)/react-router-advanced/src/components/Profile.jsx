import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';  // Import Routes, Route, Outlet, and Link

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Profile Details</Link> |  {/* Link to ProfileDetails */}
        <Link to="settings">Profile Settings</Link>  {/* Link to ProfileSettings */}
      </nav>

      {/* Nested Routes will be rendered here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />  {/* Define the nested route for ProfileDetails */}
        <Route path="settings" element={<ProfileSettings />} />  {/* Define the nested route for ProfileSettings */}
      </Routes>

      {/* Outlet renders the content of the nested route */}
      <Outlet />
    </div>
  );
};

export default Profile;



