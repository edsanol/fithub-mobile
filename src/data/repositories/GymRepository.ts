import {Gym} from '../../domain/entities/Gym';
import {GymModel} from '../../domain/models/GymModel';
import {GymRepository} from '../../domain/repositories/gymRepository';
import {GymService} from '../../domain/services/gymService';

export class GymRepositoryImpl implements GymRepository {
  constructor(private service: GymService) {}

  async getGymById(gymId: number): Promise<Gym> {
    const response: GymModel = await this.service.getGymById(gymId);
    return response.toDomain();
  }
}
