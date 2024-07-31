import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PremiumPage from './pages/PremiumPage';
import {
  NavBarHeader2 
 } from './ui-components';
 import {
  HeroLayout1 
 } from './ui-components';
 import {
  MarketingPricing 
 } from './ui-components';
 import {
  Features2x2 
 } from './ui-components';
 import {
  CTASection 
 } from './ui-components';


 function App() {
  return (
    
   
      <div className="container">
        <div className="component">
        <Router>
          <NavBarHeader2 />
          <Routes>
      <Route path="/premium" element={<PremiumPage/>}></Route>
    </Routes>
          </Router>
        </div>
        <div className="component">
          <HeroLayout1 />
        </div>
        <div className="component">
          <MarketingPricing />
        </div>
        <div className="component">
          <Features2x2  />
        </div>
        <div className="component">
          < CTASection />
        </div>
      </div>
    );
  }




export default App;




