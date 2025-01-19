import {Notification} from '../../entities/Notification';
import {NotificationRepository} from '../../repositories/notificationRepository';

export class GetNotificationsByAthleteUseCase {
  constructor(private repository: NotificationRepository) {}

  async execute(): Promise<Notification[]> {
    return await this.repository.getNotificationsByAthlete();
  }
}
