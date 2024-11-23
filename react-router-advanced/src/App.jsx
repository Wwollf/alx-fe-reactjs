import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Routes';  // Import Routes component

function App() {
  return (
    <Router>
      <Routes />  {/* Routes component will handle routing */}
    </Router>
  );
}

export default App;


