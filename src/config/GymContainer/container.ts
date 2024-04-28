import {AxiosHttpClient} from '../../data/api/http';
import {GymRepositoryImpl} from '../../data/repositories/GymRepository';
import {GymServiceImpl} from '../../data/services/GymService';
import {GetGymUseCase} from '../../domain/usecases/gymUseCases/getGymUseCase';
import Config from 'react-native-config';

const baseUrl = String(Config.GENERAL_API);

const axiosClient = new AxiosHttpClient(baseUrl);
const gymService = new GymServiceImpl(axiosClient);
const gymRepository = new GymRepositoryImpl(gymService);

const getGymUseCase = new GetGymUseCase(gymRepository);

export {getGymUseCase};
