import {FilterListRequestApi} from '../../data/api/models/filterListRequestApi';
import {MeasurementEntity} from '../entities/MeasurementEntity';
import {ChartEntityModel} from '../models/ChartEntityModel';
import {LastMeasurementRegisteredModel} from '../models/LastMeasurementRegisteredModel';
import {LastMeasurementsModel} from '../models/LastMeasurementsModel';

/**
 * Represents the MeasurementService interface.
 * It defines the contract for retrieving measurements.
 */
/**
 * Represents a service for managing athlete measurements.
 */
export interface MeasurementService {
  /**
   * Retrieves the last measurements for a given athlete within the last month.
   * @param athleteId - The ID of the athlete.
   * @returns A promise that resolves to an array of LastMeasurementsModel objects representing the last measurements.
   */
  measurementByLastMonth(athleteId: number): Promise<LastMeasurementsModel[]>;

  /**
   * Retrieves the measurement data for a specific muscle of an athlete within a given date range.
   * @param athleteId - The ID of the athlete.
   * @param muscle - The name of the muscle.
   * @param startDate - The start date of the measurement range.
   * @param endDate - The end date of the measurement range.
   * @returns A promise that resolves to an array of ChartEntityModel objects representing the measurement data.
   */
  measurementGraphic(
    athleteId: number,
    muscle: string,
    startDate: string | Date,
    endDate: string | Date,
  ): Promise<ChartEntityModel[]>;

  /**
   * Records the progress of a measurement for an athlete.
   * @param measurement - The measurement entity to record.
   * @returns A promise that resolves to a boolean indicating whether the progress was successfully recorded.
   */
  recordMeasurementProgress(measurement: MeasurementEntity): Promise<boolean>;

  /**
   * Retrieves the last measurement registered based on a filter.
   * @param filter - The filter criteria for retrieving the last measurement.
   * @returns A promise that resolves to a LastMeasurementRegisteredModel object representing the last registered measurement.
   */
  getLastMeasurementRegistered(
    filter: FilterListRequestApi,
  ): Promise<LastMeasurementRegisteredModel>;
}
