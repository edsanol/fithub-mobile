import {AthleteEditRequestModel} from '../../domain/models/AthleteEditRequestModel';
import {AthleteEditResponseModel} from '../../domain/models/AthleteEditResponseModel';
import {AthleteModel} from '../../domain/models/AthleteModel';
import {ContactInformationModel} from '../../domain/models/ContactInformationModel';
import {LoginModel} from '../../domain/models/LoginModel';
import {VerifyLoginModel} from '../../domain/models/VerifyLoginModel';
import {AthleteService} from '../../domain/services/AthleteService';
import {HttpClient} from '../api/http';
import {TickerResponseApi} from '../api/models/tickerResponseApi';

/**
 * Implementation of the AthleteService interface.
 * Provides methods for registering, logging in, and verifying login for athletes.
 */
/**
 * Implementation of the AthleteService interface.
 * Provides methods for interacting with athlete data.
 */
export class AthleteServiceImpl implements AthleteService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves the contact information of the athlete.
   * @returns A promise that resolves to the ContactInformationModel.
   */
  async getContactInformation(): Promise<ContactInformationModel> {
    const response = await this.http.get<
      TickerResponseApi<ContactInformationModel>
    >(`/Athlete/GetContactInformation`);

    return ContactInformationModel.toContactInformationModel(response.data);
  }

  /**
   * Edits the athlete's information.
   * @param athlete - The AthleteEditRequestModel containing the updated information.
   * @returns A promise that resolves to the AthleteEditResponseModel.
   */
  async editAthlete(
    athlete: AthleteEditRequestModel,
  ): Promise<AthleteEditResponseModel> {
    const response = await this.http.put<
      TickerResponseApi<AthleteEditResponseModel>,
      AthleteEditRequestModel
    >(`/Athlete/EditMobile`, athlete);

    return response.data;
  }

  /**
   * Registers a new athlete with the provided email and password.
   * @param email - The email of the athlete.
   * @param password - The password of the athlete.
   * @returns A promise that resolves to the created AthleteModel.
   */
  async register(email: string, password: string): Promise<AthleteModel> {
    const response = await this.http.post<
      TickerResponseApi<AthleteModel>,
      LoginModel
    >(`/Athlete/CreatePassword`, {email: email, password: password});

    return AthleteModel.toAthleteModel(response.data);
  }

  /**
   * Logs in an athlete with the provided email and password.
   * @param email - The email of the athlete.
   * @param password - The password of the athlete.
   * @returns A promise that resolves to the logged in AthleteModel.
   */
  async login(email: string, password: string): Promise<AthleteModel> {
    const response = await this.http.post<
      TickerResponseApi<AthleteModel>,
      LoginModel
    >(`/Athlete/Login`, {email: email, password: password});

    return AthleteModel.toAthleteModel(response.data);
  }

  /**
   * Verifies the login status of an athlete with the provided email.
   * @param email - The email of the athlete.
   * @returns A promise that resolves to the login status (number).
   */
  async verifyLogin(email: string): Promise<number> {
    const response = await this.http.post<
      TickerResponseApi<number>,
      VerifyLoginModel
    >(`/Athlete/VerifyLogin`, {email: email});

    return response.data;
  }
}
