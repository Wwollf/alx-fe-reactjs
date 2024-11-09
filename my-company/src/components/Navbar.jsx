import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav 
      style={{ 
        padding: '10px', 
        backgroundColor: '#333', 
        color: '#fff', 
        display: 'flex', 
        justifyContent: 'space-around'  // Centers and spaces the links evenly
      }}
    >
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
      <Link to="/services" style={{ color: 'white' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

