import {AthleteEditRequestModel} from '../models/AthleteEditRequestModel';
import {AthleteEditResponseModel} from '../models/AthleteEditResponseModel';
import {AthleteModel} from '../models/AthleteModel';
import {ContactInformationModel} from '../models/ContactInformationModel';

export interface AthleteService {
  verifyLogin(email: string): Promise<number>;
  login(email: string, password: string): Promise<AthleteModel>;
  register(email: string, password: string): Promise<AthleteModel>;
  editAthlete(
    athlete: AthleteEditRequestModel,
  ): Promise<AthleteEditResponseModel>;
  getContactInformation(): Promise<ContactInformationModel>;
}
