import {AxiosHttpClient} from '../../data/api/http';
import {AthleteRepositoryImpl} from '../../data/repositories/AthleteRepository';
import {AthleteServiceImpl} from '../../data/services/AthleteService';
import {EditAthleteUseCase} from '../../domain/usecases/athleteUseCases/EditAthleteUseCase';
import {GetContactInformationUseCase} from '../../domain/usecases/athleteUseCases/GetContactInformationUseCase';
import {LoginUseCase} from '../../domain/usecases/athleteUseCases/LoginUseCase';
import {RegisterUseCase} from '../../domain/usecases/athleteUseCases/RegisterUseCase';
import {VeryfyLoginUseCase} from '../../domain/usecases/athleteUseCases/VerifyLoginUseCase';

const baseUrl = 'http://192.168.0.2:45455/api';

const axiosClient = new AxiosHttpClient(baseUrl);
const loginService = new AthleteServiceImpl(axiosClient);
const AthleteRepository = new AthleteRepositoryImpl(loginService);

const veryfyLoginUseCase = new VeryfyLoginUseCase(AthleteRepository);
const loginUseCase = new LoginUseCase(AthleteRepository);
const registerUseCase = new RegisterUseCase(AthleteRepository);
const editAthleteUseCase = new EditAthleteUseCase(AthleteRepository);
const getContactInformationUseCase = new GetContactInformationUseCase(
  AthleteRepository,
);

export {
  veryfyLoginUseCase,
  loginUseCase,
  registerUseCase,
  editAthleteUseCase,
  getContactInformationUseCase,
};
