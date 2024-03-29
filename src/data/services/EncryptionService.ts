import {EncryptionService} from '../../domain/services/encryptionService';
import * as Keychain from 'react-native-keychain';
import CryptoJS from 'react-native-crypto-js';
import {generateSecureRandom} from 'react-native-securerandom';
import {Buffer} from 'buffer';
import Config from 'react-native-config';

export class EncryptionServiceImpl implements EncryptionService {
  async cipherData(data: string, credentials: string): Promise<string> {
    const encriptedToken = CryptoJS.AES.encrypt(data, credentials).toString();
    return encriptedToken;
  }

  async getDecryptedData(
    ciphertext: string,
    credential: string,
  ): Promise<string | null> {
    if (!ciphertext) {
      return null;
    }
    const bytes = CryptoJS.AES.decrypt(ciphertext, credential);
    const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
  }

  async getOrCreateEncryptionKey(): Promise<string> {
    const existingCredentials = await Keychain.getGenericPassword();
    if (existingCredentials) {
      return existingCredentials.password;
    }

    const randomBytes = await generateSecureRandom(256);

    if (!randomBytes) {
      throw new Error('Error generating a secure random key buffer');
    }

    const randomBytesString = Buffer.from(randomBytes).toString('utf8');

    if (!randomBytesString) {
      throw new Error('Error converting secure random key buffer');
    }

    const hasSetCredentials = await Keychain.setGenericPassword(
      String(Config.PUBLIC_KEY_STORAGE),
      randomBytesString,
    );

    if (!hasSetCredentials) {
      throw new Error('Error setting the generic password on Keychain');
    }

    return randomBytesString;
  }
}
