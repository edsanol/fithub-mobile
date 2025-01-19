import {
  createStackNavigator,
  StackCardStyleInterpolator,
} from '@react-navigation/stack';
import RoutineScreen from '../screens/routines/RoutineList/View';
import {Routine} from '../../domain/entities/Routine';
import RoutineDetailsScreen from '../screens/routines/RoutineDetails/View';
import {Exercise} from '../../domain/entities/Exercise';
import ExerciseDetailScreen from '../screens/routines/ExerciseDetails/View';

export type RoutinesStackParamList = {
  Routine: undefined;
  RoutineDetails: {
    data: Routine;
  };
  ExerciseDetail: {
    data: Exercise;
    status: string;
  };
};

const Stack = createStackNavigator<RoutinesStackParamList>();

const fadeAnimation: StackCardStyleInterpolator = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const RoutinesStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: fadeAnimation,
      }}>
      <Stack.Screen name="Routine" component={RoutineScreen} />
      <Stack.Screen name="RoutineDetails" component={RoutineDetailsScreen} />
      <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
    </Stack.Navigator>
  );
};

export default RoutinesStackNavigation;
