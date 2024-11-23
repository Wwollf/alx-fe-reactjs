import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';  // Profile component with nested routes
import ProfileDetails from './ProfileDetails';  // Profile details page
import ProfileSettings from './ProfileSettings';  // Profile settings page
import Home from './Home';  // Home page

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Main Home route */}
      
      {/* Profile route with nested routes */}
      <Route path="/profile" element={<Profile />}>
        <Route path="details" element={<ProfileDetails />} />  {/* Nested route for ProfileDetails */}
        <Route path="settings" element={<ProfileSettings />} />  {/* Nested route for ProfileSettings */}
      </Route>
    </Routes>
  );
};

export default RoutesComponent;


