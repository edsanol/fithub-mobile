import {Athlete} from '../../entities/Athlete';
import {AtheleteRepository} from '../../repositories/athleteRepository';

export class RegisterUseCase {
  constructor(private repository: AtheleteRepository) {}

  async execute(email: string, password: string): Promise<Athlete> {
    const response = await this.repository.register(email, password);
    return response;
  }
}
