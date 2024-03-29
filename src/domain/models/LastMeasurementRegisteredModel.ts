import {MeasurementEntity} from '../entities/MeasurementEntity';

type ConstructorParams = {
  measurementsProgressID: number;
  idAthlete: number;
  gluteus: number;
  biceps: number;
  chest: number;
  waist: number;
  thigh: number;
  calf: number;
  shoulders: number;
  forearm: number;
  height: number;
  weight: number;
  date: any;
};

export class LastMeasurementRegisteredModel {
  public measurementsProgressID: number;
  public idAthlete: number;
  public gluteus: number;
  public biceps: number;
  public chest: number;
  public waist: number;
  public thigh: number;
  public calf: number;
  public shoulders: number;
  public forearm: number;
  public height: number;
  public weight: number;
  public date: any;

  constructor({
    measurementsProgressID,
    idAthlete,
    gluteus,
    biceps,
    chest,
    waist,
    thigh,
    calf,
    shoulders,
    forearm,
    height,
    weight,
    date,
  }: ConstructorParams) {
    this.measurementsProgressID = measurementsProgressID;
    this.idAthlete = idAthlete;
    this.gluteus = gluteus;
    this.biceps = biceps;
    this.chest = chest;
    this.waist = waist;
    this.thigh = thigh;
    this.calf = calf;
    this.shoulders = shoulders;
    this.forearm = forearm;
    this.height = height;
    this.weight = weight;
    this.date = date;
  }

  public static toLastMeasurementRegisteredModel = (
    data: LastMeasurementRegisteredModel,
  ): LastMeasurementRegisteredModel => {
    return new LastMeasurementRegisteredModel({
      measurementsProgressID: data.measurementsProgressID,
      idAthlete: data.idAthlete,
      gluteus: data.gluteus,
      biceps: data.biceps,
      chest: data.chest,
      waist: data.waist,
      thigh: data.thigh,
      calf: data.calf,
      shoulders: data.shoulders,
      forearm: data.forearm,
      height: data.height,
      weight: data.weight,
      date: data.date,
    });
  };

  public toDomain = (): MeasurementEntity => {
    return new MeasurementEntity({
      gluteus: this.gluteus,
      biceps: this.biceps,
      chest: this.chest,
      waist: this.waist,
      thigh: this.thigh,
      calf: this.calf,
      shoulders: this.shoulders,
      forearm: this.forearm,
      height: this.height,
      weight: this.weight,
    });
  };
}
