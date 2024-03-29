import {Athlete} from '../../domain/entities/Athlete';
import {ContactInformation} from '../../domain/entities/ContactInformation';
import {AthleteEditRequestModel} from '../../domain/models/AthleteEditRequestModel';
import {AthleteEditResponseModel} from '../../domain/models/AthleteEditResponseModel';
import {AthleteModel} from '../../domain/models/AthleteModel';
import {ContactInformationModel} from '../../domain/models/ContactInformationModel';
import {AtheleteRepository} from '../../domain/repositories/athleteRepository';
import {AthleteService} from '../../domain/services/AthleteService';

/**
 * Implementation of the AthleteRepository interface.
 * This repository is responsible for handling login-related operations.
 */
/**
 * Implementation of the AthleteRepository interface.
 * This class provides methods to interact with the athlete data.
 */
export class AthleteRepositoryImpl implements AtheleteRepository {
  constructor(private service: AthleteService) {}

  /**
   * Retrieves the contact information of the athlete.
   * @returns A promise that resolves to the contact information of the athlete.
   */
  async getContactInformation(): Promise<ContactInformation> {
    const response: ContactInformationModel =
      await this.service.getContactInformation();
    return response.toDomain();
  }

  /**
   * Edits the athlete's information.
   * @param athlete - The updated athlete information.
   * @returns A promise that resolves to the response of the edit operation.
   */
  async editAthlete(
    athlete: AthleteEditRequestModel,
  ): Promise<AthleteEditResponseModel> {
    const response = await this.service.editAthlete(athlete);
    return response;
  }

  /**
   * Registers a new athlete with the provided email and password.
   * @param email - The email of the athlete.
   * @param password - The password of the athlete.
   * @returns A promise that resolves to the registered athlete.
   */
  async register(email: string, password: string): Promise<Athlete> {
    const response: AthleteModel = await this.service.register(email, password);
    return response.toDomain();
  }

  /**
   * Logs in an athlete with the provided email and password.
   * @param email - The email of the athlete.
   * @param password - The password of the athlete.
   * @returns A promise that resolves to the logged-in athlete.
   */
  async login(email: string, password: string): Promise<Athlete> {
    const response: AthleteModel = await this.service.login(email, password);
    return response.toDomain();
  }

  /**
   * Verifies if an athlete with the provided email is logged in.
   * @param email - The email of the athlete.
   * @returns A promise that resolves to a number indicating the login status.
   */
  async verifyLogin(email: string): Promise<number> {
    const response: number = await this.service.verifyLogin(email);
    return response;
  }
}
