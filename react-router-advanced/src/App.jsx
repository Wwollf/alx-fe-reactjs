import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';  // Import Routes component

function App() {
  return (
    <Router>
      <Routes />  {/* This handles all routing */}
    </Router>
  );
}

export default App;


