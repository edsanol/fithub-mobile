import {ChartEntity} from '../../domain/entities/ChartEntity';
import {LastMeasurements} from '../../domain/entities/LastMeasurements';
import {MeasurementEntity} from '../../domain/entities/MeasurementEntity';
import {ChartEntityModel} from '../../domain/models/ChartEntityModel';
import {LastMeasurementRegisteredModel} from '../../domain/models/LastMeasurementRegisteredModel';
import {LastMeasurementsModel} from '../../domain/models/LastMeasurementsModel';
import {MeasurementRepository} from '../../domain/repositories/measurementRepository';
import {MeasurementService} from '../../domain/services/measurementService';
import {FilterListRequestApi} from '../api/models/filterListRequestApi';

/**
 * Implementation of the MeasurementRepository interface.
 * This repository is responsible for retrieving last month's measurements for an athlete.
 */
/**
 * Implementation of the MeasurementRepository interface.
 */
export class MeasurementRepositoryImpl implements MeasurementRepository {
  /**
   * Creates an instance of MeasurementRepositoryImpl.
   * @param service - The measurement service used to fetch the data.
   */
  constructor(private service: MeasurementService) {}

  /**
   * Retrieves the last measurement registered for a specific filter.
   * @param filter - The filter to apply when fetching the measurement.
   * @returns A promise that resolves to the last measurement entity.
   */
  async getLastMeasurementRegistered(
    filter: FilterListRequestApi,
  ): Promise<MeasurementEntity> {
    const response: LastMeasurementRegisteredModel =
      await this.service.getLastMeasurementRegistered(filter);
    return response.toDomain();
  }

  /**
   * Records the measurement progress.
   * @param measurement - The measurement entity to record.
   * @returns A promise that resolves to a boolean indicating the success of the operation.
   */
  async recordMeasurementProgress(
    measurement: MeasurementEntity,
  ): Promise<boolean> {
    const response: boolean = await this.service.recordMeasurementProgress(
      measurement,
    );
    return response;
  }

  /**
   * Retrieves the measurement graphic for a specific athlete, muscle, start date, and end date.
   * @param athleteId - The ID of the athlete.
   * @param muscle - The muscle to retrieve the measurement graphic for.
   * @param startDate - The start date of the measurement graphic.
   * @param endDate - The end date of the measurement graphic.
   * @returns A promise that resolves to an array of chart entities.
   */
  async measurementGraphic(
    athleteId: number,
    muscle: string,
    startDate: string | Date,
    endDate: string | Date,
  ): Promise<ChartEntity[]> {
    const response: ChartEntityModel[] = await this.service.measurementGraphic(
      athleteId,
      muscle,
      startDate,
      endDate,
    );
    return response.map(measurement => measurement.toDomain());
  }

  /**
   * Retrieves the last month's measurements for a specific athlete.
   * @param athleteId - The ID of the athlete.
   * @returns A promise that resolves to an array of LastMeasurements objects.
   */
  async measurementByLastMonth(athleteId: number): Promise<LastMeasurements[]> {
    const response: LastMeasurementsModel[] =
      await this.service.measurementByLastMonth(athleteId);
    return response.map(measurement => measurement.toDomain());
  }
}
