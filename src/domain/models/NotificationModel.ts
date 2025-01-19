import {Notification} from '../entities/Notification';

type ConstructorParams = {
  notificationId: number;
  channelId: number;
  message: string;
  type: string;
  title: string;
  sendAt: string | Date;
};

export class NotificationModel {
  public notificationId: number;
  public channelId: number;
  public message: string;
  public type: string;
  public title: string;
  public sendAt: string | Date;

  constructor({
    notificationId,
    channelId,
    message,
    type,
    title,
    sendAt,
  }: ConstructorParams) {
    this.notificationId = notificationId;
    this.channelId = channelId;
    this.message = message;
    this.type = type;
    this.title = title;
    this.sendAt = sendAt;
  }

  public static toNotificationModel(
    notification: NotificationModel,
  ): NotificationModel {
    return new NotificationModel({
      notificationId: notification.notificationId,
      channelId: notification.channelId,
      message: notification.message,
      type: notification.type,
      title: notification.title,
      sendAt: notification.sendAt,
    });
  }

  public toDomain(): Notification {
    return new Notification({
      notificationId: this.notificationId,
      channelId: this.channelId,
      message: this.message,
      type: this.type,
      title: this.title,
      sendAt: this.sendAt,
    });
  }
}
