import {RoutineExerciseSet} from '../entities/RoutineExerciseSet';

type ConstructorParams = {
  routineExerciseSetId: number;
  setNumber: number;
  reps?: number;
  weight?: number;
};

export class RoutineExerciseSetModel {
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

  public static toRoutineExerciseSetModel(
    routineExerciseSet: RoutineExerciseSetModel,
  ): RoutineExerciseSetModel {
    return new RoutineExerciseSetModel({
      routineExerciseSetId: routineExerciseSet.routineExerciseSetId,
      setNumber: routineExerciseSet.setNumber,
      reps: routineExerciseSet.reps,
      weight: routineExerciseSet.weight,
    });
  }

  public toDomain(): RoutineExerciseSet {
    return new RoutineExerciseSet({
      routineExerciseSetId: this.routineExerciseSetId,
      setNumber: this.setNumber,
      reps: this.reps,
      weight: this.weight,
    });
  }
}
