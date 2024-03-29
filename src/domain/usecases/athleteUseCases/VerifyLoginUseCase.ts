import {AtheleteRepository} from '../../repositories/athleteRepository';

export class VeryfyLoginUseCase {
  constructor(private repository: AtheleteRepository) {}

  async execute(email: string): Promise<number> {
    return await this.repository.verifyLogin(email);
  }
}
