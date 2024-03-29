import {AtheleteRepository} from '../../repositories/athleteRepository';

export class GetContactInformationUseCase {
  constructor(private athleteRepository: AtheleteRepository) {}

  async execute() {
    return await this.athleteRepository.getContactInformation();
  }
}
