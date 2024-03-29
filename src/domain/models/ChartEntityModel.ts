import {ChartEntity} from '../entities/ChartEntity';

type ConstructorParams = {
  time: string | Date;
  value: number;
};

export class ChartEntityModel {
  public time: string | Date;
  public value: number;

  constructor({time, value}: ConstructorParams) {
    this.time = time;
    this.value = value;
  }

  public static toChartEntityModel = (
    data: ChartEntityModel,
  ): ChartEntityModel => {
    return new ChartEntityModel({
      time: data.time,
      value: data.value,
    });
  };

  public toDomain = (): ChartEntity => {
    return new ChartEntity({
      time: this.time,
      value: this.value,
    });
  };
}
