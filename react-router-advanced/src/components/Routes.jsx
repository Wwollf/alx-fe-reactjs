import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import BlogPost from './BlogPost';
import Home from './Home';

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />

      {/* Profile Route with nested routes */}
      <Route path="/profile" element={<Profile />}>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      {/* Dynamic Blog Post Route */}
      <Route path="/post/:id" element={<BlogPost />} />
    </Routes>
  );
};

export default RoutesComponent;
