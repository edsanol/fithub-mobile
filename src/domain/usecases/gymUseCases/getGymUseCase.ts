import {Gym} from '../../entities/Gym';
import {GymRepository} from '../../repositories/gymRepository';

export class GetGymUseCase {
  constructor(private repository: GymRepository) {}

  async execute(gymId: number): Promise<Gym> {
    return await this.repository.getGymById(gymId);
  }
}
