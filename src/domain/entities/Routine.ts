import {Exercise} from './Exercise';

type ConstructorParams = {
  routineId: number;
  title: string;
  description: string;
  idMuscleGroup: number;
  muscleGroupName: string;
  imageURL: string;
  isActive: boolean;
  status?: string;
  exercises: Exercise[];
};

export class Routine {
  public routineId: number;
  public title: string;
  public description: string;
  public idMuscleGroup: number;
  public muscleGroupName: string;
  public imageURL: string;
  public isActive: boolean;
  public status?: string;
  public exercises: Exercise[];

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
}
