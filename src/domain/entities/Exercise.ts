import {RoutineExerciseSet} from './RoutineExerciseSet';

type ConstructorParams = {
  routineExerciseId: number;
  idExercise: number;
  exerciseTitle: string;
  exerciseDescription: string;
  duration: number;
  videoURL: string;
  imageURL: string;
  routineExerciseSets: RoutineExerciseSet[];
};

export class Exercise {
  public routineExerciseId: number;
  public idExercise: number;
  public exerciseTitle: string;
  public exerciseDescription: string;
  public duration: number;
  public videoURL: string;
  public imageURL: string;
  public routineExerciseSets: RoutineExerciseSet[];

  constructor({
    routineExerciseId,
    idExercise,
    exerciseTitle,
    exerciseDescription,
    duration,
    videoURL,
    imageURL,
    routineExerciseSets,
  }: ConstructorParams) {
    this.routineExerciseId = routineExerciseId;
    this.idExercise = idExercise;
    this.exerciseTitle = exerciseTitle;
    this.exerciseDescription = exerciseDescription;
    this.duration = duration;
    this.videoURL = videoURL;
    this.imageURL = imageURL;
    this.routineExerciseSets = routineExerciseSets;
  }
}
