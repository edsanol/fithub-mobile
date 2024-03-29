import {AxiosHttpClient} from '../../data/api/http';
import {GymRepositoryImpl} from '../../data/repositories/GymRepository';
import {GymServiceImpl} from '../../data/services/GymService';
import {GetGymUseCase} from '../../domain/usecases/gymUseCases/getGymUseCase';

const baseUrl = 'http://192.168.0.2:45455/api';

const axiosClient = new AxiosHttpClient(baseUrl);
const gymService = new GymServiceImpl(axiosClient);
const gymRepository = new GymRepositoryImpl(gymService);

const getGymUseCase = new GetGymUseCase(gymRepository);

export {getGymUseCase};
