import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet } from 'react-native';
import { TabButton } from '../components';
import FormScreen from '../screens/form';
import { BlurView } from '@react-native-community/blur';
import MeasurementNavigation from './MeasurementNavigation';
import ProfileStackNavigation from './ProfileStackNavigation';

const Tab = createBottomTabNavigator();

const HomeBottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarHideOnKeyboard: Platform.OS === 'ios' ? false : true,
        tabBarBackground: () => (
          <BlurView
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: 'hidden',
              backgroundColor: 'transparent',
            }}
            blurType="dark"
            blurAmount={100}
            blurRadius={8}
            downsampleFactor={0}
            reducedTransparencyFallbackColor="black"
            overlayColor="transparent"
          />
        ),
      }}>
      <Tab.Screen
        name="MeasurementNavigation"
        component={MeasurementNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => (
            <TabButton icon={'heart'} title={'Home'} {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={FormScreen}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => (
            <TabButton
              icon={'add-circle-sharp'}
              title={'Registro'}
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => (
            <TabButton icon={'person'} title={'Perfil'} {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'android' ? 70 : 84,
    position: 'absolute',
    borderColor: '#A0A0A0',
  },
});
