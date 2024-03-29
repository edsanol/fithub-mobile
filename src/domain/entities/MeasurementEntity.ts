type ConstructorParams = {
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

export class MeasurementEntity {
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
