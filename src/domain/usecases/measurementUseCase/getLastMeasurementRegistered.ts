import {FilterListRequestApi} from '../../../data/api/models/filterListRequestApi';
import {MeasurementEntity} from '../../entities/MeasurementEntity';
import {MeasurementRepository} from '../../repositories/measurementRepository';

/**
 * Use case for getting the last measurement registered.
 */
export class GetLastMeasurementRegisteredUseCase {
  /**
   * Creates an instance of GetLastMeasurementRegisteredUseCase.
   * @param {MeasurementRepository} repository - The measurement repository.
   */
  constructor(private repository: MeasurementRepository) {}

  /**
   * Executes the use case to get the last measurement registered.
   * @param {FilterListRequestApi} filter - The filter for the list request.
   * @returns {Promise<MeasurementEntity>} - The last measurement registered.
   */
  async execute(filter: FilterListRequestApi): Promise<MeasurementEntity> {
    return await this.repository.getLastMeasurementRegistered(filter);
  }
}
