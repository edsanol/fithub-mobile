import {Routine} from '../entities/Routine';
import {ExerciseModel} from './ExerciseModel';

type ConstructorParams = {
  routineId: number;
  title: string;
  description: string;
  idMuscleGroup: number;
  muscleGroupName: string;
  imageURL: string;
  isActive: boolean;
  status?: string;
  exercises: ExerciseModel[];
};

export class RoutineModel {
  public routineId: number;
  public title: string;
  public description: string;
  public idMuscleGroup: number;
  public muscleGroupName: string;
  public imageURL: string;
  public isActive: boolean;
  public status?: string;
  public exercises: ExerciseModel[];

  constructor({
    routineId,
    title,
    description,
    idMuscleGroup,
    muscleGroupName,
    imageURL,
    isActive,
    status,
    exercises,
  }: ConstructorParams) {
    this.routineId = routineId;
    this.title = title;
    this.description = description;
    this.idMuscleGroup = idMuscleGroup;
    this.muscleGroupName = muscleGroupName;
    this.imageURL = imageURL;
    this.isActive = isActive;
    this.status = status;
    this.exercises = exercises;
  }

  public static toRoutineModel(routine: RoutineModel): RoutineModel {
    return new RoutineModel({
      routineId: routine.routineId,
      title: routine.title,
      description: routine.description,
      idMuscleGroup: routine.idMuscleGroup,
      muscleGroupName: routine.muscleGroupName,
      imageURL: routine.imageURL,
      isActive: routine.isActive,
      status: routine.status,
      exercises: routine.exercises,
    });
  }

  public toDomain(): Routine {
    return new Routine({
      routineId: this.routineId,
      title: this.title,
      description: this.description,
      idMuscleGroup: this.idMuscleGroup,
      muscleGroupName: this.muscleGroupName,
      imageURL: this.imageURL,
      isActive: this.isActive,
      status: this.status,
      exercises: this.exercises,
    });
  }
}
