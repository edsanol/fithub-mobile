/**
 * Represents the parameters required to construct a LastMeasurementsModel instance.
 */
type ConstructorParams = {
  muscle: string;
  progress: number;
  measurement: number;
  progressPercentage: number;
};

/**
 * Represents the LastMeasurementsModel class.
 */
export class LastMeasurements {
  public muscle: string;
  public progress: number;
  public measurement: number;
  public progressPercentage: number;

  /**
   * Constructs a new instance of the LastMeasurementsModel class.
   * @param {ConstructorParams} params - The constructor parameters.
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
}
