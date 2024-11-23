import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isAuthenticated = false; // Replace this with actual authentication logic

  if (!isAuthenticated) {
    // Redirect to the home page if the user is not authenticated
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
