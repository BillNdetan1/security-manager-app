import { Authenticator, View, Image, useTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {
    NavBarHeader 
   } from '../ui-components';
import {
    SideBar 
   } from '../ui-components';

const PremiumPage = () => {
    const components = {
        Header() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.large}>
              <Image
                alt="DNAS logo"
                src="https://securitymanagerimages.s3.amazonaws.com/White+DNA+Symbol.png"
              />
            </View>
          );
        },
        
    }
    return(
       

        <Authenticator components={components}>
            
             <div className="container">
                
                 <div className="component">
                <NavBarHeader />
              </div>

              <div className="component">
                <SideBar />
              </div>

              </div>

            
        </Authenticator>


    );
};

export default PremiumPage;