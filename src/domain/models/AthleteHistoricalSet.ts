type ConstructorParams = {
  idRoutineExercise: number | null;
  setNumber: number | null;
  reps: number | null;
  weight: number | null;
};

export class AthleteHistoricalSet {
  public idRoutineExercise: number | null;
  public setNumber: number | null;
  public reps: number | null;
  public weight: number | null;

  constructor({idRoutineExercise, setNumber, reps, weight}: ConstructorParams) {
    this.idRoutineExercise = idRoutineExercise;
    this.setNumber = setNumber;
    this.reps = reps;
    this.weight = weight;
  }

  public static toAthleteHistoricalSet(
    set: AthleteHistoricalSet,
  ): AthleteHistoricalSet {
    return new AthleteHistoricalSet({
      idRoutineExercise: set.idRoutineExercise,
      setNumber: set.setNumber,
      reps: set.reps,
      weight: set.weight,
    });
  }

  // public toDomain(): AthleteHistoricalSet {
  //   return new AthleteHistoricalSet({
  //     idRoutineExercise: this.idRoutineExercise,
  //     setNumber: this.setNumber,
  //     reps: this.reps,
  //     weight: this.weight,
  //   });
  // }
}
