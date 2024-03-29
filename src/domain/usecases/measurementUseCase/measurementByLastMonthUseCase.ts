import {LastMeasurements} from '../../entities/LastMeasurements';
import {MeasurementRepository} from '../../repositories/measurementRepository';

/**
 * Use case for retrieving measurements from the last month for a given athlete.
 */
export class MeasurementByLastMonthUseCase {
  constructor(private repository: MeasurementRepository) {}

  /**
   * Executes the use case to retrieve measurements from the last month for the specified athlete.
   * @param athleteId - The ID of the athlete.
   * @returns A promise that resolves to an array of LastMeasurements objects.
   */
  async execute(athleteId: number): Promise<LastMeasurements[]> {
    return await this.repository.measurementByLastMonth(athleteId);
  }
}
