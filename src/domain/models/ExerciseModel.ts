import {Exercise} from '../entities/Exercise';
import {RoutineExerciseSetModel} from './RoutineExerciseSetModel';

type ConstructorParams = {
  routineExerciseId: number;
  idExercise: number;
  exerciseTitle: string;
  exerciseDescription: string;
  duration: number;
  videoURL: string;
  imageURL: string;
  routineExerciseSets: RoutineExerciseSetModel[];
};

export class ExerciseModel {
  public routineExerciseId: number;
  public idExercise: number;
  public exerciseTitle: string;
  public exerciseDescription: string;
  public duration: number;
  public videoURL: string;
  public imageURL: string;
  public routineExerciseSets: RoutineExerciseSetModel[];

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

  public static toExerciseModel(exercise: ExerciseModel): ExerciseModel {
    return new ExerciseModel({
      routineExerciseId: exercise.routineExerciseId,
      idExercise: exercise.idExercise,
      exerciseTitle: exercise.exerciseTitle,
      exerciseDescription: exercise.exerciseDescription,
      duration: exercise.duration,
      videoURL: exercise.videoURL,
      imageURL: exercise.imageURL,
      routineExerciseSets: exercise.routineExerciseSets,
    });
  }

  public toDomain(): Exercise {
    return new Exercise({
      routineExerciseId: this.routineExerciseId,
      idExercise: this.idExercise,
      exerciseTitle: this.exerciseTitle,
      exerciseDescription: this.exerciseDescription,
      duration: this.duration,
      videoURL: this.videoURL,
      imageURL: this.imageURL,
      routineExerciseSets: this.routineExerciseSets,
    });
  }
}
