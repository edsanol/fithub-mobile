import {NotificationRepository} from '../../repositories/notificationRepository';

export class GetAllChannelsByAthleteUseCase {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(): Promise<number[]> {
    return this.notificationRepository.getChannelList();
  }
}
