import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserProvider } from './presentation/context/UserContext';
import OnboardingStackNavigation from './presentation/navigation/OnboardingStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';

const App = () => {

  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
