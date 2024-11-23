import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';  // Profile component
import ProfileDetails from './ProfileDetails';  // ProfileDetails component
import ProfileSettings from './ProfileSettings';  // ProfileSettings component
import Home from './Home';  // Home component

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Main home route */}
      
      {/* Nested route for Profile */}
      <Route path="/profile" element={<Profile />}>
        <Route path="details" element={<ProfileDetails />} />  {/* Nested route for ProfileDetails */}
        <Route path="settings" element={<ProfileSettings />} />  {/* Nested route for ProfileSettings */}
      </Route>
    </Routes>
  );
};

export default RoutesComponent;


