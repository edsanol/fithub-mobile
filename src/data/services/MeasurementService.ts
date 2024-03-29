import {MeasurementEntity} from '../../domain/entities/MeasurementEntity';
import {ChartEntityModel} from '../../domain/models/ChartEntityModel';
import {LastMeasurementRegisteredModel} from '../../domain/models/LastMeasurementRegisteredModel';
import {LastMeasurementsModel} from '../../domain/models/LastMeasurementsModel';
import {MeasurementService} from '../../domain/services/measurementService';
import {HttpClient} from '../api/http';
import {FilterListRequestApi} from '../api/models/filterListRequestApi';
import {FilterListResponseApi} from '../api/models/filterListResponseApi';
import {TickerResponseApi} from '../api/models/tickerResponseApi';

/**
 * Implementation of the MeasurementService interface.
 * This class provides methods to retrieve measurements for a given athlete.
 */
/**
 * Implementation of the MeasurementService interface.
 * This class provides methods to interact with measurement data.
 */
export class MeasurementServiceImpl implements MeasurementService {
  /**
   * Creates an instance of MeasurementServiceImpl.
   * @param http - The HttpClient instance used to make HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieves the last measurement registered for a given filter.
   * @param filter - The filter to apply when retrieving the measurement.
   * @returns A promise that resolves to the last measurement registered.
   */
  async getLastMeasurementRegistered(
    filter: FilterListRequestApi,
  ): Promise<LastMeasurementRegisteredModel> {
    const response = await this.http.post<
      TickerResponseApi<FilterListResponseApi<LastMeasurementRegisteredModel>>,
      FilterListRequestApi
    >(`/Athlete/GetMeasurementProgressList`, {
      ...filter,
    });

    return LastMeasurementRegisteredModel.toLastMeasurementRegisteredModel(
      response.data.items[0],
    );
  }

  /**
   * Records the measurement progress.
   * @param measurement - The measurement to record.
   * @returns A promise that resolves to a boolean indicating the success of the operation.
   */
  async recordMeasurementProgress(
    measurement: MeasurementEntity,
  ): Promise<boolean> {
    const response = await this.http.post<boolean, MeasurementEntity>(
      `/Athlete/RecordMeasurementProgress`,
      {
        ...measurement,
      },
    );
    return response;
  }

  /**
   * Retrieves the measurement graphic for a given athlete, muscle, start date, and end date.
   * @param athleteId - The ID of the athlete.
   * @param muscle - The muscle to retrieve the measurement graphic for.
   * @param startDate - The start date of the measurement graphic.
   * @param endDate - The end date of the measurement graphic.
   * @returns A promise that resolves to an array of ChartEntityModel representing the measurement graphic.
   */
  async measurementGraphic(
    athleteId: number,
    muscle: string,
    startDate: string | Date,
    endDate: string | Date,
  ): Promise<ChartEntityModel[]> {
    const response = await this.http.get<TickerResponseApi<ChartEntityModel[]>>(
      `/Athlete/GetMeasurementsGraphic?athleteID=${athleteId}&muscle=${muscle}&startDate=${startDate}&endDate=${endDate}`,
    );
    return response.data.map(data => ChartEntityModel.toChartEntityModel(data));
  }

  /**
   * Retrieves the last month's measurements for a given athlete.
   * @param athleteId - The ID of the athlete.
   * @returns A promise that resolves to an array of LastMeasurementsModel objects representing the measurements.
   */
  async measurementByLastMonth(
    athleteId: number,
  ): Promise<LastMeasurementsModel[]> {
    const response = await this.http.get<
      TickerResponseApi<LastMeasurementsModel[]>
    >(`/Athlete/GetMeasurementsByLastMonth?athleteID=${athleteId}`);
    return response.data.map(data =>
      LastMeasurementsModel.toLastMeasurementsModel(data),
    );
  }
}
