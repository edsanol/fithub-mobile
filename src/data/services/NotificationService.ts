import {NotificationModel} from '../../domain/models/NotificationModel';
import {NotificationService} from '../../domain/services/notificationService';
import {HttpClient} from '../api/http';
import {TickerResponseApi} from '../api/models/tickerResponseApi';

export class NotificationServiceImpl implements NotificationService {
  constructor(private http: HttpClient) {}

  async getNotificationsByAthlete(): Promise<NotificationModel[]> {
    const response = await this.http.get<
      TickerResponseApi<NotificationModel[]>
    >('/Notification/GetNotificationsByAthlete');

    return response.data.map(notification =>
      NotificationModel.toNotificationModel(notification),
    );
  }

  async getChannelList(): Promise<number[]> {
    const response = await this.http.get<TickerResponseApi<number[]>>(
      '/Notification/GetChannelsByAthlete',
    );

    return response.data;
  }
}
