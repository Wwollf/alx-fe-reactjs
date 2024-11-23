// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost'; // Import BlogPost component
import Login from './components/Login';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute element={<Profile />} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;






