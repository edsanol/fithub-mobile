import {Routine} from '../../domain/entities/Routine';
import {AthleteHistoricalSet} from '../../domain/models/AthleteHistoricalSet';
import {PaginateData} from '../../domain/models/PaginateData';
import {PaginateResponseList} from '../../domain/models/PaginateResponseListModel';
import {RoutineRepository} from '../../domain/repositories/routineRepository';
import {RoutineService} from '../../domain/services/routineService';

export class RoutineRepositoryImpl implements RoutineRepository {
  constructor(private service: RoutineService) {}

  async insertAthleteHistoricalSet(
    set: AthleteHistoricalSet[],
  ): Promise<boolean> {
    return this.service.insertAthleteHistoricalSet(set);
  }

  async getPaginatedRoutines(
    paginateData: PaginateData,
  ): Promise<PaginateResponseList<Routine>> {
    const response = await this.service.getPaginatedRoutines(paginateData);
    return new PaginateResponseList<Routine>({
      totalRecords: response.totalRecords,
      items: response.items.map(item => item.toDomain()),
    });
  }
}
