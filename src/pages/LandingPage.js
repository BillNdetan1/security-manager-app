import {
  NavBarHeader2 
 } from '../ui-components';
 import {
  HeroLayout1 
 } from '../ui-components';
 import {
  MarketingPricing 
 } from '../ui-components';
 import {
  Features2x2 
 } from '../ui-components';
 import {
  CTASection 
 } from '../ui-components';

const LandingPage = () => {
    return(
      <div className="container">
      
      <div className="component">
        <NavBarHeader2 />
      </div>
      
      <div className="component">
        <div id="Home"></div>
        <HeroLayout1 />
      </div>
     
      <div className="component">
        <div id="Price"></div>
        <MarketingPricing />
      </div>
      
      <div className="component">
        <div id="Features"></div>
        <Features2x2  />
      </div>
     
      <div className="component">
       <div id="Contacts"></div>
       < CTASection />
      </div>
    
    </div>


    );
};

export default LandingPage;