import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RoutinesStackParamList} from '../../../navigation/RoutinesStackNavigation';
import {SvgXml} from 'react-native-svg';
import {BackButton} from '../../../assets/svg/iconSVG';
import {RoutineDetailStyles} from './styles';
import RoutineDetailCard from './components/RoutineDetailCard';
import RoutineDescription from './components/RoutineDescription';
import {Exercise} from '../../../../domain/entities/Exercise';
import RoutineItems from './components/RoutineItems';
import ExerciseDetailViewModel from '../ExerciseDetails/ViewModel';
import exerciseDetailStyles from '../ExerciseDetails/styles';
import {AthleteHistoricalSet} from '../../../../domain/models/AthleteHistoricalSet';

interface RoutineDetailsProps
  extends StackScreenProps<RoutinesStackParamList, 'RoutineDetails'> {}

const RoutineDetailsScreen = ({navigation, route}: RoutineDetailsProps) => {
  const {loading, completed, handleSave} = ExerciseDetailViewModel();

  const duration = route.params.data.exercises.reduce(
    (acc, curr) => acc + curr?.duration,
    0,
  );

  const totalSets = route.params.data.exercises.reduce(
    (acc, curr) => acc + curr.routineExerciseSets.length,
    0,
  );

  const historicalSet: AthleteHistoricalSet[] = route.params.data.exercises
    .map(e =>
      e.routineExerciseSets.map(s => ({
        idRoutineExercise: e.idExercise,
        setNumber: s.setNumber,
        reps: s.reps ?? null,
        weight: s.weight ?? null,
      })),
    )
    .flat();

  const handleExercisePress = (item: Exercise) => {
    navigation.navigate('ExerciseDetail', {
      data: item,
      status: route.params.data.status ?? '',
    });
  };

  return (
    <View style={{flex: 1, paddingBottom: Platform.OS === 'android' ? 70 : 84}}>
      <View style={{flex: 1, position: 'relative'}}>
        <TouchableOpacity
          style={RoutineDetailStyles.backButtonContainer}
          onPress={() => navigation.goBack()}>
          <View style={RoutineDetailStyles.backButtonView}>
            <SvgXml
              xml={BackButton}
              height={20}
              color={'#FFFFFF'}
              style={{right: 2}}
            />
          </View>
        </TouchableOpacity>
        <View style={RoutineDetailStyles.routineTitleContainer}>
          <Text style={RoutineDetailStyles.titleText}>
            {route.params.data.title}
          </Text>
        </View>
        <Image
          source={{uri: route.params.data.imageURL}}
          style={{width: '100%', height: '100%', opacity: 0.4}}
          resizeMode="cover"
        />
      </View>
      <View style={{flex: 2}}>
        <View style={RoutineDetailStyles.mainInfoContainer}>
          <Text
            style={{
              color: '#D0D0D0',
              fontSize: 11,
              fontWeight: '400',
              backgroundColor:
                route.params.data.status === 'Active'
                  ? '#2A49FF'
                  : route.params.data.status === 'Inactive'
                  ? '#DE0011'
                  : '#008F39',
              padding: 4,
              borderRadius: 8,
            }}>
            {route.params.data.status}
          </Text>
          <RoutineItems text={`${duration} min`} icon="time" />
          <RoutineItems
            text={`${route.params.data.exercises.length} ejercicios`}
            icon="barbell"
          />
          <RoutineItems text={`${totalSets} Sets`} icon="cube" />
        </View>

        <View style={{flex: 1}}>
          <FlatList
            data={route.params.data.exercises}
            keyExtractor={item => item.idExercise.toString()}
            renderItem={({item}) => (
              <RoutineDetailCard item={item} onPress={handleExercisePress} />
            )}
            ListHeaderComponent={
              <RoutineDescription description={route.params.data.description} />
            }
            contentContainerStyle={{paddingBottom: 280}}
          />
          <View
            style={{
              height: 64,
              width: '100%',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={!completed ? 0.7 : 1}
              style={{
                ...exerciseDetailStyles.saveButton,
                backgroundColor: !completed ? '#2A49FF' : '#6B7280',
              }}
              onPress={() => {
                if (!completed && !loading) {
                  handleSave(historicalSet, navigation);
                }
              }}>
              <Text style={exerciseDetailStyles.buttonText}>
                Completar Rutina
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoutineDetailsScreen;
