import {Routine} from '../entities/Routine';
import {AthleteHistoricalSet} from '../models/AthleteHistoricalSet';
import {PaginateData} from '../models/PaginateData';
import {PaginateResponseList} from '../models/PaginateResponseListModel';

export interface RoutineRepository {
  getPaginatedRoutines(
    paginateData: PaginateData,
  ): Promise<PaginateResponseList<Routine>>;
  insertAthleteHistoricalSet(set: AthleteHistoricalSet[]): Promise<boolean>;
}
