import {AxiosHttpClient} from '../../data/api/http';
import {MeasurementRepositoryImpl} from '../../data/repositories/MeasurementRepository';
import {MeasurementServiceImpl} from '../../data/services/MeasurementService';
import {GetLastMeasurementRegisteredUseCase} from '../../domain/usecases/measurementUseCase/getLastMeasurementRegistered';
import {MeasurementByLastMonthUseCase} from '../../domain/usecases/measurementUseCase/measurementByLastMonthUseCase';
import {MeasurementGraphicUseCase} from '../../domain/usecases/measurementUseCase/measurementGraphic';
import {RecordMeasurementProgressUseCase} from '../../domain/usecases/measurementUseCase/recordMeasurementProgress';

const baseUrl = 'http://192.168.0.2:45455/api';

const axiosClient = new AxiosHttpClient(baseUrl);
const measurementService = new MeasurementServiceImpl(axiosClient);
const measurementRepository = new MeasurementRepositoryImpl(measurementService);

const measurementByLastMonthUseCase: MeasurementByLastMonthUseCase =
  new MeasurementByLastMonthUseCase(measurementRepository);

const measurementGraphicUseCase = new MeasurementGraphicUseCase(
  measurementRepository,
);

const recordMeasurementProgressUseCase = new RecordMeasurementProgressUseCase(
  measurementRepository,
);

const getLastMeasurementRegisteredUseCase =
  new GetLastMeasurementRegisteredUseCase(measurementRepository);

export {
  measurementByLastMonthUseCase,
  measurementGraphicUseCase,
  recordMeasurementProgressUseCase,
  getLastMeasurementRegisteredUseCase,
};
