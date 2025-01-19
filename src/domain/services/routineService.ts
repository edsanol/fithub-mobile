import {AthleteHistoricalSet} from '../models/AthleteHistoricalSet';
import {PaginateData} from '../models/PaginateData';
import {PaginateResponseList} from '../models/PaginateResponseListModel';
import {RoutineModel} from '../models/RoutineModel';

export interface RoutineService {
  getPaginatedRoutines(
    paginateData: PaginateData,
  ): Promise<PaginateResponseList<RoutineModel>>;
  insertAthleteHistoricalSet(set: AthleteHistoricalSet[]): Promise<boolean>;
}
