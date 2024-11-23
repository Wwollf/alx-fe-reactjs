// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import the useAuth hook

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Check the authentication status

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element; // If authenticated, return the requested component
};

export default ProtectedRoute;

