import {useCallback, useEffect, useState} from 'react';
import {Routine} from '../../../../domain/entities/Routine';
import {getPaginatedRoutinesUseCase} from '../../../../config/RoutineContainer/container';
import {PaginateResponseList} from '../../../../domain/models/PaginateResponseListModel';
import {PaginateData} from '../../../../domain/models/PaginateData';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutinesStackParamList} from '../../../navigation/RoutinesStackNavigation';
import {useFocusEffect} from '@react-navigation/native';

const RoutineListViewModel = () => {
  const [routinesList, setRoutinesList] = useState<
    PaginateResponseList<Routine>
  >({
    totalRecords: 0,
    items: [],
  });
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState<string>('');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const handleRoutinePress = (
    item: Routine,
    navigation: StackNavigationProp<RoutinesStackParamList, 'Routine'>,
  ) => {
    navigation.navigate('RoutineDetails', {data: item});
  };

  useEffect(() => {
    if (value) {
      const filteredList = routinesList.items.filter(item =>
        item.title.toLowerCase().includes(value.toLowerCase()),
      );
      setRoutinesList({...routinesList, items: filteredList});
    } else {
      getRoutinesList();
    }
  }, [value]);

  const paginateData: PaginateData = {
    numPage: 1,
    numRecordsPage: 100,
    numFilter: 0,
    textFilter: '',
  };

  const getRoutinesList = async () => {
    try {
      setLoading(true);
      const response = await getPaginatedRoutinesUseCase.execute(paginateData);
      setRoutinesList(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getRoutinesList();
    }, []),
  );

  return {
    routinesList,
    loading,
    value,
    onChangeText,
    handleRoutinePress,
  };
};

export default RoutineListViewModel;
