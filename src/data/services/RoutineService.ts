import {AthleteHistoricalSet} from '../../domain/models/AthleteHistoricalSet';
import {PaginateData} from '../../domain/models/PaginateData';
import {PaginateResponseList} from '../../domain/models/PaginateResponseListModel';
import {RoutineModel} from '../../domain/models/RoutineModel';
import {RoutineService} from '../../domain/services/routineService';
import {HttpClient} from '../api/http';
import {TickerResponseApi} from '../api/models/tickerResponseApi';

export class RoutineServiceImpl implements RoutineService {
  constructor(private http: HttpClient) {}

  async insertAthleteHistoricalSet(
    set: AthleteHistoricalSet[],
  ): Promise<boolean> {
    const response = await this.http.post<
      TickerResponseApi<boolean>,
      AthleteHistoricalSet[]
    >('/Routine/InsertAthleteHistoricalSets', set);

    return response.data;
  }

  async getPaginatedRoutines(
    paginateData: PaginateData,
  ): Promise<PaginateResponseList<RoutineModel>> {
    const response = await this.http.post<
      TickerResponseApi<PaginateResponseList<RoutineModel>>,
      PaginateData
    >('/Routine/GetRoutinesByAthleteIdList', paginateData);

    return new PaginateResponseList<RoutineModel>({
      totalRecords: response.data.totalRecords,
      items: response.data.items.map(item => RoutineModel.toRoutineModel(item)),
    });
  }
}
