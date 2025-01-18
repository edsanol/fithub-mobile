type ConstructorParams = {
  routineExerciseSetId: number;
  setNumber: number;
  reps?: number;
  weight?: number;
};

export class RoutineExerciseSet {
  public routineExerciseSetId: number;
  public setNumber: number;
  public reps?: number;
  public weight?: number;

  constructor({
    routineExerciseSetId,
    setNumber,
    reps,
    weight,
  }: ConstructorParams) {
    this.routineExerciseSetId = routineExerciseSetId;
    this.setNumber = setNumber;
    this.reps = reps;
    this.weight = weight;
  }
}
