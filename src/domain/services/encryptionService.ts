export interface EncryptionService {
  cipherData(data: string, credentials: string): Promise<string>;
  getDecryptedData(
    ciphertext: string,
    credential: string,
  ): Promise<string | null>;
  getOrCreateEncryptionKey(): Promise<string>;
}
