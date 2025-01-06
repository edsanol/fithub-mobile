import {SignalRRepository} from '../../repositories/signalRRepository';

export class SignalRUseCases {
  constructor(private repository: SignalRRepository) {}

  async initializeConnection(): Promise<void> {
    await this.repository.connect();
  }

  subscribeToNotifications(
    callback: (channelId: number, message: string) => void,
  ): void {
    this.repository.on('ReceiveMessage', callback);
  }

  unsubscribeFromNotifications(): void {
    this.repository.off('ReceiveMessage');
  }

  async joinChannel(channelIds: number[]): Promise<void> {
    await this.repository.invoke('JoinAllChannelsByAthlete', channelIds);
  }

  disconnect(): void {
    this.repository.disconnect();
  }
}
