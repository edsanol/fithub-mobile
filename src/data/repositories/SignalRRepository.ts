import { SignalRRepository } from '../../domain/repositories/signalRRepository';
import { SignalRService } from '../../domain/services/signalRService';

export class SignalRRepositoryImpl implements SignalRRepository {
  constructor(private service: SignalRService) { }

  connectionState(): string {
    return this.service.connectionState();
  }

  async connect(): Promise<void> {
    await this.service.connect();
  }

  disconnect(): void {
    this.service.disconnect();
  }

  on(eventName: string, callback: (...args: any[]) => void): void {
    this.service.on(eventName, callback);
  }

  off(eventName: string): void {
    this.service.off(eventName);
  }

  async invoke<T>(methodName: string, channelIds: number[]): Promise<T> {
    return this.service.invoke<T>(methodName, channelIds);
  }
}
