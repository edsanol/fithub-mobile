import {ChartEntity} from '../../entities/ChartEntity';
import {MeasurementRepository} from '../../repositories/measurementRepository';

/**
 * Use case for generating measurement graphics.
 */
export class MeasurementGraphicUseCase {
  /**
   * Creates an instance of MeasurementGraphicUseCase.
   * @param {MeasurementRepository} repository - The measurement repository.
   */
  constructor(private repository: MeasurementRepository) {}

  /**
   * Executes the measurement graphic use case.
   * @param {number} athleteId - The ID of the athlete.
   * @param {string} muscle - The muscle to generate the graphic for.
   * @param {string | Date} startDate - The start date of the measurement period.
   * @param {string | Date} endDate - The end date of the measurement period.
   * @returns {Promise<ChartEntity[]>} - The generated measurement graphic.
   */
  async execute(
    athleteId: number,
    muscle: string,
    startDate: string | Date,
    endDate: string | Date,
  ): Promise<ChartEntity[]> {
    return await this.repository.measurementGraphic(
      athleteId,
      muscle,
      startDate,
      endDate,
    );
  }
}
