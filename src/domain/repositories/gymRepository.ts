import {Gym} from '../entities/Gym';

export interface GymRepository {
  getGymById(gymId: number): Promise<Gym>;
}
