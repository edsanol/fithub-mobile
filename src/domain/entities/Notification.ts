type ConstructorParams = {
  notificationId: number;
  channelId: number;
  message: string;
  type: string;
  title: string;
  sendAt: string | Date;
};

export class Notification {
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
}
