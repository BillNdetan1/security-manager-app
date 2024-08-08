import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PremiumPage from './pages/PremiumPage';




 function App() {
  

  return (
    
    <Router>
    <div className="container">
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/premium" element={<PremiumPage />} />
      </Routes>
    </div>
  </Router>
);
}




export default App;




