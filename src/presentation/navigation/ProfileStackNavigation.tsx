import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  ContactScreen,
  DataTreatmentScreen,
  EditProfileScreen,
  ProfileScreen,
  TermsAndConditionsScreen,
} from '../screens/profile';

export type ProfileStackParamList = {
  Profile: undefined;
  EditProfile: undefined;
  TermsAndConditions: undefined;
  DataTreatment: undefined;
  Contact: undefined;
};

const Stack = createStackNavigator<ProfileStackParamList>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const ProfileStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: fadeAnimation,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditionsScreen}
      />
      <Stack.Screen name="DataTreatment" component={DataTreatmentScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigation;
