import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PremiumPage from './pages/PremiumPage';
import {
  NavBarHeader2 
 } from './ui-components';



 function App() {
  

  return (
    
    <Router>
    <div className="container">
      <div className="component">
        <NavBarHeader2 />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/premium" element={<PremiumPage />} />
      </Routes>
    </div>
  </Router>
);
}




export default App;




