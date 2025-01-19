import {Routine} from '../../entities/Routine';
import {PaginateData} from '../../models/PaginateData';
import {PaginateResponseList} from '../../models/PaginateResponseListModel';
import {RoutineRepository} from '../../repositories/routineRepository';

export class GetPaginatedRoutinesUseCase {
  constructor(private repository: RoutineRepository) {}

  execute(paginateData: PaginateData): Promise<PaginateResponseList<Routine>> {
    return this.repository.getPaginatedRoutines(paginateData);
  }
}
