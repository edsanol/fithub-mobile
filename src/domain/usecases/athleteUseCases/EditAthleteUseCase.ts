import {AthleteEditRequestModel} from '../../models/AthleteEditRequestModel';
import {AthleteEditResponseModel} from '../../models/AthleteEditResponseModel';
import {AtheleteRepository} from '../../repositories/athleteRepository';

export class EditAthleteUseCase {
  constructor(private repository: AtheleteRepository) {}

  async execute(
    athlete: AthleteEditRequestModel,
  ): Promise<AthleteEditResponseModel> {
    return await this.repository.editAthlete(athlete);
  }
}
