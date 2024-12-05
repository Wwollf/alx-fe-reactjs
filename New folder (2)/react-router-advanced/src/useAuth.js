// src/hooks/useAuth.js
import { useState } from 'react';

export const useAuth = () => {
  // Simulate user login status with useState (you can integrate actual authentication logic here)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate login
  const login = () => setIsAuthenticated(true);

  // Function to simulate logout
  const logout = () => setIsAuthenticated(false);

  return {
    isAuthenticated,
    login,
    logout,
  };
};
