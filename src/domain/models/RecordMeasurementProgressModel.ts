type ConstructorParams = {
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
};

export class RecordMeasurementProgressModel {
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

  constructor({
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
  }: ConstructorParams) {
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
  }
}
