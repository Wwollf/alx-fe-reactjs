import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Make sure to create this component
import Profile from './components/Profile';  // Profile component for nested routes
import ProfileDetails from './components/ProfileDetails';  // ProfileDetails component
import ProfileSettings from './components/ProfileSettings';  // ProfileSettings component
import BlogPost from './components/BlogPost';  // Dynamic blog post route

function App() {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<Home />} />
        
        {/* Nested route for Profile, with sub-routes for ProfileDetails and ProfileSettings */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route for a blog post */}
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
