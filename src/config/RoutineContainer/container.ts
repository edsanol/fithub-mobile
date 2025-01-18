import Config from 'react-native-config';
import {AxiosHttpClient} from '../../data/api/http';
import {RoutineServiceImpl} from '../../data/services/RoutineService';
import {RoutineRepositoryImpl} from '../../data/repositories/RoutineRepository';
import {GetPaginatedRoutinesUseCase} from '../../domain/usecases/routineUseCases/getPaginatedRoutinesUseCase';
import {InsertAthleteHistoricalSetUseCase} from '../../domain/usecases/routineUseCases/insertAthleteHistoricalSetUseCase';

const baseUrl = String(Config.GENERAL_API);
const axiosClient = new AxiosHttpClient(baseUrl);
const routineService = new RoutineServiceImpl(axiosClient);
const routineRepository = new RoutineRepositoryImpl(routineService);

const getPaginatedRoutinesUseCase = new GetPaginatedRoutinesUseCase(
  routineRepository,
);
const insertAthleteHistoricalSetUseCase = new InsertAthleteHistoricalSetUseCase(
  routineRepository,
);

export {getPaginatedRoutinesUseCase, insertAthleteHistoricalSetUseCase};
