import 'core-js/stable/atob';
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {jwtDecode} from 'jwt-decode';
import {encryptionService} from '../../config/EncryptionContainer/container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import {DevSettings} from 'react-native';

export interface HttpClient {
  get<T>(url: string): Promise<T>;
  post<T, U>(url: string, data: U): Promise<T>;
  put<T, U>(url: string, data: U): Promise<T>;
}

export class AxiosHttpClient implements HttpClient {
  private instance: AxiosInstance;

  constructor(private baseUrl: string) {
    this.instance = axios.create({baseURL: this.baseUrl});

    this.instance.interceptors.request.use(async config => {
      await this.handleTokenRefresh(config);
      return config;
    });
  }

  private async handleTokenRefresh(config: AxiosRequestConfig) {
    const getKey = await encryptionService.getOrCreateEncryptionKey();
    const token = await AsyncStorage.getItem(
      String(Config.TOKEN_STORAGE_ENCRYPTED),
    );
    const tokenDecrypted = token
      ? await encryptionService.getDecryptedData(token, getKey)
      : '';

    if (tokenDecrypted && config.headers && tokenDecrypted !== '') {
      const timeDifference = await this.checkTokenExpiration(tokenDecrypted);
      if (timeDifference < 2 * 60 * 1000) {
        const refreshToken = await AsyncStorage.getItem(
          String(Config.TOKEN_REFRESH_STORAGE_ENCRYPTED),
        );
        const refreshTokenDecrypted = refreshToken
          ? await encryptionService.getDecryptedData(refreshToken, getKey)
          : '';

        try {
          if (refreshTokenDecrypted) {
            const response = await this.refreshToken(refreshTokenDecrypted);
            if (response.status === 200) {
              const newToken = await encryptionService.cipherData(
                response.data.data,
                getKey,
              );
              await AsyncStorage.setItem(
                String(Config.TOKEN_STORAGE_ENCRYPTED),
                newToken,
              );
              config.headers.Authorization = `Bearer ${response.data.data}`;
            }
          }
        } catch (error) {
          console.error('Error during token refresh:', error);
          await this.handleAuthenticationError();
        }
      } else {
        config.headers.Authorization = `Bearer ${tokenDecrypted}`;
      }
    } else {
      if (config.headers) {
        config.headers.Authorization = `Bearer`;
        this.handleAuthenticationError();
      }
    }
  }

  private async refreshToken(refreshToken: string) {
    try {
      const response = await axios.post(
        `${String(Config.GENERAL_API)}/Athlete/refreshToken`,
        null,
        {
          headers: {
            RefreshToken: refreshToken,
          },
        },
      );

      return response;
    } catch (error) {
      console.error('Error during token refresh:', error);
      throw error;
    }
  }

  private async checkTokenExpiration(token: string) {
    const decodedToken = jwtDecode(token);
    const currentDate = new Date();
    const expirationDate = new Date((decodedToken.exp as number) * 1000);

    const timeDifference = expirationDate.getTime() - currentDate.getTime();
    return timeDifference;
  }

  private async handleAuthenticationError() {
    await AsyncStorage.removeItem(String(Config.TOKEN_STORAGE_ENCRYPTED));
    await AsyncStorage.removeItem(
      String(Config.TOKEN_REFRESH_STORAGE_ENCRYPTED),
    );
    DevSettings.reload();
  }

  async post<T, U>(url: string, data: U): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.post(url, data);
    return response.data;
  }
  async put<T, U>(url: string, data: U): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.put(url, data);
    return response.data;
  }

  async get<T>(url: string): Promise<T> {
    const response: AxiosResponse<T> = await this.instance.get(url);
    return response.data;
  }
}
