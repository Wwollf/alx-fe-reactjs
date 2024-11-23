// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Import Home component
import BlogPost from './components/BlogPost';  // Import BlogPost component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/blog/:id" element={<BlogPost />} />  {/* Dynamic blog post route */}
      </Routes>
    </Router>
  );
}

export default App;




