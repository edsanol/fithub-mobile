import {AthleteHistoricalSet} from '../../models/AthleteHistoricalSet';
import {RoutineRepository} from '../../repositories/routineRepository';

export class InsertAthleteHistoricalSetUseCase {
  constructor(private repository: RoutineRepository) {}

  execute(set: AthleteHistoricalSet[]): Promise<boolean> {
    return this.repository.insertAthleteHistoricalSet(set);
  }
}
