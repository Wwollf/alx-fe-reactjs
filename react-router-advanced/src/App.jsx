// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login'; // Assuming a Login component exists
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Protect the Profile route using ProtectedRoute */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute element={<Profile />} /> // Protect profile page
          }
        />
      </Routes>
    </Router>
  );
}

export default App;





