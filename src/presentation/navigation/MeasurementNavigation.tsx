import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';
import MeasurementStatsScreen from '../screens/measurement';
import HomeScreen from '../screens/home';
import {LastMeasurements} from '../../domain/entities/LastMeasurements';

export type MeasurementStackParamList = {
  Home: undefined;
  MeasurementStats: {
    data: LastMeasurements;
  };
};

const Stack = createStackNavigator<MeasurementStackParamList>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const MeasurementNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: fadeAnimation,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="MeasurementStats"
        component={MeasurementStatsScreen}
      />
    </Stack.Navigator>
  );
};

export default MeasurementNavigation;
