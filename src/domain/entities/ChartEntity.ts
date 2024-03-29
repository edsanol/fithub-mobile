type ConstructorParams = {
  time: string | Date;
  value: number;
};

export class ChartEntity {
  public time: string | Date;
  public value: number;

  constructor({time, value}: ConstructorParams) {
    this.time = time;
    this.value = value;
  }
}
