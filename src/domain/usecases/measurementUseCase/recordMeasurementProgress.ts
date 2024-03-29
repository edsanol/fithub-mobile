import {MeasurementEntity} from '../../entities/MeasurementEntity';
import {MeasurementRepository} from '../../repositories/measurementRepository';

export class RecordMeasurementProgressUseCase {
  constructor(private repository: MeasurementRepository) {}

  async execute(measurement: MeasurementEntity): Promise<boolean> {
    return await this.repository.recordMeasurementProgress(measurement);
  }
}
