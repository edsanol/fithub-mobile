import {Notification} from '../../domain/entities/Notification';
import {NotificationModel} from '../../domain/models/NotificationModel';
import {NotificationRepository} from '../../domain/repositories/notificationRepository';
import {NotificationService} from '../../domain/services/notificationService';

export class NotificationRepositoryImpl implements NotificationRepository {
  constructor(private service: NotificationService) {}

  async getNotificationsByAthlete(): Promise<Notification[]> {
    const response: NotificationModel[] =
      await this.service.getNotificationsByAthlete();
    return response.map(model => model.toDomain());
  }

  async getChannelList(): Promise<number[]> {
    const response = await this.service.getChannelList();
    return response;
  }
}
