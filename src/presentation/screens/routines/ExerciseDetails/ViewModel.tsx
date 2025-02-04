import {useState} from 'react';
import {insertAthleteHistoricalSetUseCase} from '../../../../config/RoutineContainer/container';
import {AthleteHistoricalSet} from '../../../../domain/models/AthleteHistoricalSet';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutinesStackParamList} from '../../../navigation/RoutinesStackNavigation';

const ExerciseDetailViewModel = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const extractVideoId = (url: string) => {
    try {
      const urlObj = new URL(url);

      // 1. Si la URL contiene 'watch', obtenemos el parámetro 'v'
      if (
        urlObj.hostname.includes('youtube.com') &&
        urlObj.pathname === '/watch'
      ) {
        return urlObj.searchParams.get('v');
      }

      // 2. Si la URL es de Shorts, obtenemos el ID del pathname
      if (
        urlObj.hostname.includes('youtube.com') &&
        urlObj.pathname.startsWith('/shorts/')
      ) {
        return urlObj.pathname.split('/')[2];
      }

      // 3. Si la URL es del tipo 'youtu.be', obtenemos el ID del pathname
      if (urlObj.hostname.includes('youtu.be')) {
        return urlObj.pathname.substring(1);
      }

      // 4. Si la URL es del tipo embed, obtenemos el ID del pathname
      if (
        urlObj.hostname.includes('youtube.com') &&
        urlObj.pathname.startsWith('/embed/')
      ) {
        return urlObj.pathname.split('/')[2];
      }

      return null;
    } catch (error) {
      console.error('Error extracting video ID:', error);
      return null;
    }
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
      console.log('error routines', error);
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
