import {Athlete} from '../../entities/Athlete';
import {AtheleteRepository} from '../../repositories/athleteRepository';

export class LoginUseCase {
  constructor(private repository: AtheleteRepository) {}

  async execute(email: string, password: string): Promise<Athlete> {
    const response = await this.repository.login(email, password);
    return response;
  }
}
