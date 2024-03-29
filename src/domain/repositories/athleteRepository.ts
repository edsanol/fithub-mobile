import {Athlete} from '../entities/Athlete';
import {ContactInformation} from '../entities/ContactInformation';
import {AthleteEditRequestModel} from '../models/AthleteEditRequestModel';
import {AthleteEditResponseModel} from '../models/AthleteEditResponseModel';

export interface AtheleteRepository {
  verifyLogin(email: string): Promise<number>;
  login(email: string, password: string): Promise<Athlete>;
  register(email: string, password: string): Promise<Athlete>;
  editAthlete(
    athlete: AthleteEditRequestModel,
  ): Promise<AthleteEditResponseModel>;
  getContactInformation(): Promise<ContactInformation>;
}
