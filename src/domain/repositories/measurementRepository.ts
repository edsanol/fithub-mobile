import {FilterListRequestApi} from '../../data/api/models/filterListRequestApi';
import {ChartEntity} from '../entities/ChartEntity';
import {LastMeasurements} from '../entities/LastMeasurements';
import {MeasurementEntity} from '../entities/MeasurementEntity';

/**
 * Represents a measurement repository.
 */
/**
 * Represents a repository for managing measurements related to athletes.
 */
export interface MeasurementRepository {
  /**
   * Retrieves the last measurements for a given athlete within the last month.
   *
   * @param athleteId - The ID of the athlete.
   * @returns A promise that resolves to an array of LastMeasurements objects.
   */
  measurementByLastMonth(athleteId: number): Promise<LastMeasurements[]>;

  /**
   * Retrieves the measurement data for a specific muscle of an athlete within a given date range.
   *
   * @param athleteId - The ID of the athlete.
   * @param muscle - The name of the muscle.
   * @param startDate - The start date of the date range.
   * @param endDate - The end date of the date range.
   * @returns A promise that resolves to an array of ChartEntity objects representing the measurement data.
   */
  measurementGraphic(
    athleteId: number,
    muscle: string,
    startDate: string | Date,
    endDate: string | Date,
  ): Promise<ChartEntity[]>;

  /**
   * Records the progress of a measurement.
   *
   * @param measurement - The measurement entity to be recorded.
   * @returns A promise that resolves to a boolean indicating whether the progress was successfully recorded.
   */
  recordMeasurementProgress(measurement: MeasurementEntity): Promise<boolean>;

  /**
   * Retrieves the last measurement registered based on the provided filter.
   *
   * @param filter - The filter criteria for retrieving the last measurement.
   * @returns A promise that resolves to a MeasurementEntity representing the last measurement registered.
   */
  getLastMeasurementRegistered(
    filter: FilterListRequestApi,
  ): Promise<MeasurementEntity>;
}
