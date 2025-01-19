import {SignalRRepositoryImpl} from '../../data/repositories/SignalRRepository';
import {SignalRServiceImpl} from '../../data/services/SignalRService';
import {SignalRUseCases} from '../../domain/usecases/signarlRUseCases/SignalRUseCases';

const signalRService = SignalRServiceImpl.getInstance();
const signalRRepository = new SignalRRepositoryImpl(signalRService);

const signalRUseCases = new SignalRUseCases(signalRRepository);

export {signalRUseCases};
