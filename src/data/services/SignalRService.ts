import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from '@microsoft/signalr';
import {SignalRService} from '../../domain/services/signalRService';
import Config from 'react-native-config';

export class SignalRServiceImpl implements SignalRService {
  private static instance: SignalRServiceImpl;
  private connection: HubConnection | null = null;

  private constructor() {
    this.connection = new HubConnectionBuilder()
      .withUrl(`${String(Config.GENERAL_API_HUB)}/notification`, {
        withCredentials: true,
      })
      .withAutomaticReconnect()
      .configureLogging(LogLevel.Debug)
      .build();
  }

  public static getInstance(): SignalRServiceImpl {
    if (!SignalRServiceImpl.instance) {
      SignalRServiceImpl.instance = new SignalRServiceImpl();
    }
    return SignalRServiceImpl.instance;
  }

  public async connect(): Promise<void> {
    if (this.connection?.state === 'Disconnected') {
      await this.connection.start();
    }
  }

  disconnect(): void {
    if (this.connection?.state === 'Connected') {
      this.connection.stop();
    }
  }

  on(eventName: string, callback: (...args: any[]) => void): void {
    if (this.connection) {
      this.connection.off(eventName);
      this.connection.on(eventName, callback);
    }
  }

  off(eventName: string): void {
    if (this.connection) {
      this.connection.off(eventName);
    }
  }

  async invoke<T>(methodName: string, channelIds: number[]): Promise<T> {
    if (this.connection?.state === 'Connected') {
      return this.connection.invoke<T>(methodName, channelIds);
    }
    throw new Error('SignalR connection is not established');
  }

  connectionState(): string {
    return this.connection?.state || 'Disconnected';
  }
}
