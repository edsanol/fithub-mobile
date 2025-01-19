import {NotificationModel} from '../models/NotificationModel';

export interface NotificationService {
  /**
   * Retrieves the list of channels.
   * @returns A promise that resolves to an array of channel IDs.
   */
  getChannelList(): Promise<number[]>;

  /**
   * Retrieves the list of notifications for the current athlete.
   * @returns A promise that resolves to an array of notifications
   * for the current athlete.
   */
  getNotificationsByAthlete(): Promise<NotificationModel[]>;
}
