/**
 *
 * This file contains the implementation of the OnboardingStackNavigation component.
 * The OnboardingStackNavigation component is responsible for rendering the navigation stack for the onboarding flow.
 * It uses the createStackNavigator function from the @react-navigation/stack library to create the navigation stack.
 * The component conditionally renders different screens based on the user's authentication status.
 * If the user is not authenticated, it renders the Welcome, About, Login, Password, and CreatePassword screens.
 * If the user is authenticated, it renders the HomeNavigation screen.
 * The component also displays an activity indicator when the user's authentication status is 'checking'.
 */

import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  AboutScreen,
  CreatePasswordScreen,
  LoginScreen,
  OnboardingScreen,
  PasswordScreen,
} from '../screens/onboarding';
import HomeBottomNavigation from './HomeBottomNavigation';
import LoadingScreen from '../screens/Loading';

/**
 * The parameter list for the OnboardingStackNavigation component.
 * It defines the available screen names and their corresponding parameters.
 */
export type RootOnboardingStackParamList = {
  Welcome: undefined;
  about: undefined;
  login: undefined;
  password: {
    email: string;
  };
  createPassword: {
    email: string;
  };
  HomeNavigation: undefined;
  Loading: undefined;
};

const Stack = createStackNavigator<RootOnboardingStackParamList>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const OnboardingStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Loading"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: fadeAnimation,
      }}>
      <Stack.Screen name="Welcome" component={OnboardingScreen} />
      <Stack.Screen name="about" component={AboutScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="password" component={PasswordScreen} />
      <Stack.Screen name="createPassword" component={CreatePasswordScreen} />
      <Stack.Screen name="HomeNavigation" component={HomeBottomNavigation} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStackNavigation;
