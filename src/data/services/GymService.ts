import {GymModel} from '../../domain/models/GymModel';
import {GymService} from '../../domain/services/gymService';
import {HttpClient} from '../api/http';
import {TickerResponseApi} from '../api/models/tickerResponseApi';

/**
 * Implementation of the GymService interface.
 * Provides methods to interact with the gym data.
 */
export class GymServiceImpl implements GymService {
  /**
   * Creates an instance of GymServiceImpl.
   * @param http - The HttpClient instance used for making HTTP requests.
   */
  constructor(private http: HttpClient) {}

  /**
   * Retrieves a gym by its ID.
   * @param gymId - The ID of the gym to retrieve.
   * @returns A Promise that resolves to the GymModel representing the gym.
   */
  async getGymById(gymId: number): Promise<GymModel> {
    const response = await this.http.get<TickerResponseApi<GymModel>>(
      `/Gym/GymById?gymID=${gymId}`,
    );
    return GymModel.toGymModel(response.data);
  }
}
