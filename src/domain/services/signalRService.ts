export interface SignalRService {
  connect(): Promise<void>;
  disconnect(): void;
  on(eventName: string, callback: (...args: any[]) => void): void;
  off(eventName: string): void;
  invoke<T>(methodName: string, channelIds: number[]): Promise<T>;
}
