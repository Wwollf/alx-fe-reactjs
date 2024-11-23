import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Home Component
import Profile from './components/Profile';  // Profile Component (Parent for nested routes)
import ProfileDetails from './components/ProfileDetails';  // ProfileDetails Component (Nested Route)
import ProfileSettings from './components/ProfileSettings';  // ProfileSettings Component (Nested Route)
import BlogPost from './components/BlogPost';  // Dynamic route for blog post

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Profile Route with nested routes for details and settings */}
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Blog Post Route */}
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;

