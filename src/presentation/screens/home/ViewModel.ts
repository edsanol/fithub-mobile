import moment from 'moment';
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {measurementByLastMonthUseCase} from '../../../config/MeasurementContainer/container';
import {LastMeasurements} from '../../../domain/entities/LastMeasurements';
import {getGymUseCase} from '../../../config/GymContainer/container';
import {UserContext} from '../../context/UserContext';
import {getChannelListUseCase} from '../../../config/NotificationContainer/container';
import {signalRUseCases} from '../../../config/SignalRContainer/container';

const NOTIFICATIONS_KEY = 'UNREAD_NOTIFICATIONS_COUNT';

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
  const [unreadNotifications, setUnreadNotifications] = useState<number>(0);
  const {getGym, athlete, gym} = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const isInitializedRef = useRef(false);
  const isChannelsFetched = useRef(false);

  const initializeConnection = async () => {
    await signalRUseCases.initializeConnection();
  };

  const waitUntilConnected = async () => {
    const maxRetries = 10;
    const retryDelay = 500;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const connectionState = signalRUseCases.connectionState();
      if (connectionState === 'Connected') {
        return;
      }

      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }

    throw new Error('SignalR connection did not reach Connected state');
  };

  const getChannelsByAthlete = async () => {
    if (isChannelsFetched.current) return;
    isChannelsFetched.current = true;

    try {
      const response = await getChannelListUseCase.execute();

      await waitUntilConnected();

      await signalRUseCases.joinChannel(response);
    } catch (error) {
      console.error('Error en getChannelsByAthlete:', error);
    }
  };

  const handleReceiveMessage = useCallback(
    (channelId: number, message: string) => {
      const newCount = unreadNotifications + 1;
      setUnreadNotifications(newCount);
      saveUnreadNotifications(newCount);
    },
    [unreadNotifications],
  );

  const loadUnreadNotifications = useCallback(async () => {
    try {
      const storedCount = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
      if (storedCount !== null) {
        setUnreadNotifications(parseInt(storedCount, 10));
      }
    } catch (error) {
      console.error('Error al cargar las notificaciones no leídas:', error);
    }
  }, []);

  const resetUnreadNotifications = async () => {
    try {
      setUnreadNotifications(0);
      await saveUnreadNotifications(0);
    } catch (error) {
      console.error('Error al reiniciar las notificaciones no leídas:', error);
    }
  };

  const saveUnreadNotifications = async (count: number) => {
    try {
      await AsyncStorage.setItem(NOTIFICATIONS_KEY, count.toString());
    } catch (error) {
      console.error('Error al guardar las notificaciones no leídas:', error);
    }
  };

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

  useEffect(() => {
    const setupSignalR = async () => {
      try {
        await initializeConnection();
        await getChannelsByAthlete();
      } catch (error) {
        console.error('Error setting up SignalR:', error);
      }
    };

    if (!isInitializedRef.current) {
      isInitializedRef.current = true;
      setupSignalR();
    }
  }, []);

  useEffect(() => {
    signalRUseCases.subscribeToNotifications(handleReceiveMessage);

    return () => {
      signalRUseCases.unsubscribeFromNotifications();
    };
  }, [handleReceiveMessage]);

  useEffect(() => {
    loadUnreadNotifications();
  }, [loadUnreadNotifications]);

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
    unreadNotifications,
    resetUnreadNotifications,
    handleRefresh,
  };
};

export default HomeViewModel;
