import {LastMeasurements} from '../entities/LastMeasurements';

type ConstructorParams = {
  muscle: string;
  progress: number;
  measurement: number;
  progressPercentage: number;
};

/**
 * Represents the LastMeasurementsModel class.
 */
export class LastMeasurementsModel {
  public muscle: string;
  public progress: number;
  public measurement: number;
  public progressPercentage: number;

  /**
   * Creates an instance of LastMeasurementsModel.
   * @param muscle - The muscle name.
   * @param progress - The progress value.
   * @param measurement - The measurement value.
   * @param progressPercentage - The progress percentage value.
   */
  constructor({
    muscle,
    progress,
    measurement,
    progressPercentage,
  }: ConstructorParams) {
    this.muscle = muscle;
    this.progress = progress;
    this.measurement = measurement;
    this.progressPercentage = progressPercentage;
  }

  /**
   * Converts a LastMeasurementsModel object to a LastMeasurementsModel instance.
   * @param data - The LastMeasurementsModel object to convert.
   * @returns A new instance of LastMeasurementsModel.
   */
  public static toLastMeasurementsModel = (
    data: LastMeasurementsModel,
  ): LastMeasurementsModel => {
    return new LastMeasurementsModel({
      muscle: data.muscle,
      progress: data.progress,
      measurement: data.measurement,
      progressPercentage: data.progressPercentage,
    });
  };

  /**
   * Converts the LastMeasurementsModel instance to a LastMeasurements instance.
   * @returns A new instance of LastMeasurements.
   */
  public toDomain = (): LastMeasurements => {
    return new LastMeasurements({
      muscle: this.muscle,
      progress: this.progress,
      measurement: this.measurement,
      progressPercentage: this.progressPercentage,
    });
  };
}
