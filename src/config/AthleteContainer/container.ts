import { AxiosHttpClient } from '../../data/api/http';
import { AthleteRepositoryImpl } from '../../data/repositories/AthleteRepository';
import { AthleteServiceImpl } from '../../data/services/AthleteService';
import { EditAthleteUseCase } from '../../domain/usecases/athleteUseCases/EditAthleteUseCase';
import { GetContactInformationUseCase } from '../../domain/usecases/athleteUseCases/GetContactInformationUseCase';
import { LoginUseCase } from '../../domain/usecases/athleteUseCases/LoginUseCase';
import { RegisterUseCase } from '../../domain/usecases/athleteUseCases/RegisterUseCase';
import { VeryfyLoginUseCase } from '../../domain/usecases/athleteUseCases/VerifyLoginUseCase';
import Config from 'react-native-config';

const baseUrl = String(Config.GENERAL_API);

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
