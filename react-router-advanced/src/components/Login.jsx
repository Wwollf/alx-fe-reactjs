// src/components/Login.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth(); // Access login function
  const navigate = useNavigate(); // Hook to navigate to the Profile page

  const handleLogin = () => {
    login(); // Set authentication to true
    navigate('/profile'); // Redirect to profile page after login
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
