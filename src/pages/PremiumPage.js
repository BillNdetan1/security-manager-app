import { Authenticator, View, Image, useTheme } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

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
            {({ signOut }) => (
                <div>
                    <h1>Welcome to your Security Manager</h1>
                    <h3>Thank you for signing up!</h3>
                    <button onClick={signOut}>Sign Out</button>
                </div>

            )}
        </Authenticator>


    );
};

export default PremiumPage;