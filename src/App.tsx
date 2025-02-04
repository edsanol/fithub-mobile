import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserProvider } from './presentation/context/UserContext';
import OnboardingStackNavigation from './presentation/navigation/OnboardingStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const requestUserPermission = async () => {
    if (Platform.OS === 'android')
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    const fcmToken = await messaging().getToken();
  };

  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(true);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onNotificationOpenedApp(
      async remoteMessage => {
        if (remoteMessage) {
          const NOTIFICATIONS_KEY = 'UNREAD_NOTIFICATIONS_COUNT';
          const storedCount = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
          const count = storedCount ? parseInt(storedCount, 10) + 1 : 1;

          await AsyncStorage.setItem(NOTIFICATIONS_KEY, count.toString());
        }
      },
    );

    messaging()
      .getInitialNotification()
      .then(async remoteMessage => {
        if (remoteMessage) {
          const NOTIFICATIONS_KEY = 'UNREAD_NOTIFICATIONS_COUNT';
          const storedCount = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
          const count = storedCount ? parseInt(storedCount, 10) + 1 : 1;

          await AsyncStorage.setItem(NOTIFICATIONS_KEY, count.toString());
        }
      });

    return () => {
      unsubscribe();
    };
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
