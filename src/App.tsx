import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {UserProvider} from './presentation/context/UserContext';
import OnboardingStackNavigation from './presentation/navigation/OnboardingStackNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            background: '#100E1D',
            primary: '#2A49FF',
            card: 'rgba(50, 0, 240, 0.1)',
            text: '#FFFFFF',
            border: '#6B7280',
            notification: '#2A49FF',
          },
        }}>
        <UserProvider>
          <OnboardingStackNavigation />
        </UserProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
