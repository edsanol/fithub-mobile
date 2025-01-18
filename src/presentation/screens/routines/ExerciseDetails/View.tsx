import {View, Text, Platform, TouchableOpacity} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {BackgoundComponent, HeaderWithBackButton} from '../../../components';
import {StackScreenProps} from '@react-navigation/stack';
import {RoutinesStackParamList} from '../../../navigation/RoutinesStackNavigation';
import {RoutineExerciseSet} from '../../../../domain/entities/RoutineExerciseSet';
import ExerciseDetailViewModel from './ViewModel';
import exerciseDetailStyles from './styles';
import ExerciseSetItem from './components/ExerciseSetItem';
import LoadingScreen from '../../Loading';
import React from 'react';

interface ExerciseDetailsProps
  extends StackScreenProps<RoutinesStackParamList, 'ExerciseDetail'> {}

const ExerciseDetailScreen = ({navigation, route}: ExerciseDetailsProps) => {
  const {loading, completed, handleSave, extractVideoId} =
    ExerciseDetailViewModel();
  const {data} = route.params;
  const videoId = extractVideoId(data.videoURL);

  const historicalSet = data.routineExerciseSets.map(e => ({
    idRoutineExercise: data.routineExerciseId,
    setNumber: e.setNumber,
    reps: e.reps ?? null,
    weight: e.weight ?? null,
  }));

  if (loading) {
    return (
      <>
        <LoadingScreen show={false} />
      </>
    );
  }

  return (
    <BackgoundComponent
      styles={{paddingBottom: Platform.OS === 'android' ? 70 : 84}}>
      <View style={{marginHorizontal: 16}}>
        <HeaderWithBackButton navigation={navigation} styles={{height: '9%'}} />
      </View>
      {videoId && videoId !== '' && (
        <YoutubePlayer height={240} play={false} videoId={videoId} />
      )}
      <View style={{flex: 1, marginHorizontal: 16}}>
        <View>
          <Text style={exerciseDetailStyles.exerciseTitle}>
            {data.exerciseTitle}
          </Text>
          <Text style={exerciseDetailStyles.exerciseDescription}>
            {data.exerciseDescription}
          </Text>
          <View
            style={{
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 12,
            }}>
            <Text
              style={{
                color: '#D0D0D0',
                fontSize: 11,
                fontWeight: '400',
                backgroundColor:
                  route.params.status === 'Active'
                    ? '#2A49FF'
                    : route.params.status === 'Inactive'
                    ? '#DE0011'
                    : '#008F39',
                padding: 4,
                borderRadius: 8,
              }}>
              {route.params.status}
            </Text>
          </View>
          <View style={exerciseDetailStyles.mainContainer}>
            <View>
              {data.routineExerciseSets.map((e: RoutineExerciseSet, index) => (
                <View style={exerciseDetailStyles.setsContainer} key={index}>
                  <ExerciseSetItem
                    text={`Set ${e.setNumber}`}
                    icon="list"
                    color="#FFFFFF"
                  />
                  {e.reps ? (
                    <ExerciseSetItem
                      text={`${e.reps} Reps`}
                      icon="flame"
                      color="#FFFFFF"
                    />
                  ) : (
                    <ExerciseSetItem
                      text={`${e.reps} Reps`}
                      icon="flame"
                      color="transparent"
                    />
                  )}
                  {e.weight ? (
                    <ExerciseSetItem
                      text={`${e.weight} Kg`}
                      icon="barbell"
                      color="#FFFFFF"
                    />
                  ) : (
                    <ExerciseSetItem
                      text={`${e.weight} Kg`}
                      icon="barbell"
                      color="transparent"
                    />
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default ExerciseDetailScreen;
