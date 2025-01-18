import {useState} from 'react';
import {insertAthleteHistoricalSetUseCase} from '../../../../config/RoutineContainer/container';
import {AthleteHistoricalSet} from '../../../../domain/models/AthleteHistoricalSet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutinesStackParamList} from '../../../navigation/RoutinesStackNavigation';

const ExerciseDetailViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const extractVideoId = (url: string) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  };

  const handleSave = async (
    set: AthleteHistoricalSet[],
    navigation: StackNavigationProp<RoutinesStackParamList, 'RoutineDetails'>,
  ) => {
    try {
      setLoading(true);

      const saveHistoricalSet = await insertAthleteHistoricalSetUseCase.execute(
        set,
      );

      if (saveHistoricalSet) {
        navigation.popToTop();
      }
    } catch (error) {
      console.log(error);
      setCompleted(false);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    completed,
    handleSave,
    extractVideoId,
  };
};

export default ExerciseDetailViewModel;
