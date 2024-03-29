import {GymModel} from '../models/GymModel';

export interface GymService {
  getGymById(gymId: number): Promise<GymModel>;
}
