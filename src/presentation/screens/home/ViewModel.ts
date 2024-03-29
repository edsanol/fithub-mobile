import moment from 'moment';
import {useContext, useEffect, useMemo, useState} from 'react';
import {measurementByLastMonthUseCase} from '../../../config/MeasurementContainer/container';
import {LastMeasurements} from '../../../domain/entities/LastMeasurements';
import {getGymUseCase} from '../../../config/GymContainer/container';
import {UserContext} from '../../context/UserContext';

const emptyArray: LastMeasurements[] = [
  {
    muscle: 'Gluteus',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Biceps',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Chest',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Waist',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Thigh',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Calf',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Shoulders',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Forearm',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Height',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
  {
    muscle: 'Weight',
    progress: 0,
    measurement: 0,
    progressPercentage: 0,
  },
];

const HomeViewModel = () => {
  const date = moment().format('dddd, DD');
  const [value, setValue] = useState(new Date());
  const [measurements, setMeasurements] = useState<LastMeasurements[]>([]);
  const {getGym, athlete, gym} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getMeasurementsByLastMonth = async (id: number) => {
    try {
      setLoading(true);
      const response = await measurementByLastMonthUseCase.execute(id);

      if (response.length === 0) {
        setMeasurements(emptyArray);
      } else {
        setMeasurements(response);
      }
    } catch (error) {
      console.error('Error al obtener las medidas del último mes', error);
    } finally {
      setLoading(false);
    }
  };

  const getGymByID = async (id: number) => {
    try {
      const response = await getGymUseCase.execute(id);
      getGym(response);
    } catch (error: any) {
      console.log('error 6', error);
    }
  };

  useEffect(() => {
    let isMounted = true;
    if (athlete?.idGym !== undefined && isMounted && !refreshing) {
      getMeasurementsByLastMonth(athlete?.athleteId || 0);
      getGymByID(athlete.idGym);
    }

    return () => {
      isMounted = false;
    };
  }, [athlete?.athleteId, refreshing]);

  const weeks = useMemo(() => {
    const start = moment().add(0, 'weeks').startOf('week');

    return [0].map(adj => {
      return Array.from({length: 7}).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, []);

  const handleRefresh = (data: boolean) => {
    setRefreshing(data);
  };

  return {
    date,
    value,
    weeks,
    measurements,
    athlete,
    gym,
    loading,
    refreshing,
    handleRefresh,
  };
};

export default HomeViewModel;
