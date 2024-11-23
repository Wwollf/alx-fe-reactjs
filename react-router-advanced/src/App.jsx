import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './components/Routes';  // Import RoutesComponent which manages routing

function App() {
  return (
    <Router>
      <RoutesComponent />  {/* Renders Routes from Routes.jsx */}
    </Router>
  );
}

export default App;



