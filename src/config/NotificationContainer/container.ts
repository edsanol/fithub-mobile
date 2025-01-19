import Config from 'react-native-config';
import {AxiosHttpClient} from '../../data/api/http';
import {NotificationServiceImpl} from '../../data/services/NotificationService';
import {NotificationRepositoryImpl} from '../../data/repositories/NotificationRepository';
import {GetAllChannelsByAthleteUseCase} from '../../domain/usecases/notificationUseCases/getAllChannelsByAthlete';
import {GetNotificationsByAthleteUseCase} from '../../domain/usecases/notificationUseCases/getNotificationsByAthleteUseCase';

const baseUrl = String(Config.GENERAL_API);
const axiosClient = new AxiosHttpClient(baseUrl);
const notificationService = new NotificationServiceImpl(axiosClient);
const notificationRepository = new NotificationRepositoryImpl(
  notificationService,
);

const getChannelListUseCase = new GetAllChannelsByAthleteUseCase(
  notificationRepository,
);

const getNotificationsByAthleteUseCase = new GetNotificationsByAthleteUseCase(
  notificationRepository,
);

export {getChannelListUseCase, getNotificationsByAthleteUseCase};
