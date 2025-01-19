import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {Athlete} from '../../domain/entities/Athlete';
import {UserState, userReducer} from './UserReducer';
import {encryptionService} from '../../config/EncryptionContainer/container';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';
import axios from 'axios';
import {Gym} from '../../domain/entities/Gym';
import {AthleteEditResponseModel} from '../../domain/models/AthleteEditResponseModel';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootOnboardingStackParamList} from '../navigation/OnboardingStackNavigation';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';

/**
 * Represents the props for the UserContext.
 */
type UserContextProps = {
  error: string;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  athlete: Athlete | null;
  gym: Gym | null;
  signIn: (user: Athlete) => void;
  logOut: () => void;
  checkLogin: () => void;
  getGym: (gym: Gym) => void;
  updateAthlete: (athlete: AthleteEditResponseModel) => void;
};

/**
 * Represents the initial state for the UserContext.
 */
const initialState: UserState = {
  status: 'checking',
  error: '',
  athlete: null,
  gym: null,
  signIn: () => {},
  logOut: () => {},
  checkLogin: () => {},
  getGym: () => {},
  updareAthlete: () => {},
};

/**
 * The UserContext provides the user-related data and actions to its descendants.
 */
export const UserContext = createContext({} as UserContextProps);

/**
 * The UserProvider component is responsible for managing the user state and providing it to the UserContext.
 * @param children - The child components to be wrapped by the UserProvider.
 */
export const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const navigation =
    useNavigation<StackNavigationProp<RootOnboardingStackParamList>>();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      checkLogin();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (state.status !== 'checking') {
      if (state.status === 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeNavigation'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'Welcome'}],
        });
      }
    }
  }, [state.status]);

  /**
   * Signs in the user.
   * @param user - The user to be signed in.
   */
  const signIn = useCallback(async (user: Athlete) => {
    try {
      const getKey = await encryptionService.getOrCreateEncryptionKey();
      const tokenEncrypted = user.token
        ? await encryptionService.cipherData(user.token, getKey)
        : '';
      const refreshTokenEncrypted = user.refreshToken
        ? await encryptionService.cipherData(user.refreshToken, getKey)
        : '';
      await AsyncStorage.setItem(
        String(Config.TOKEN_STORAGE_ENCRYPTED),
        tokenEncrypted,
      );
      await AsyncStorage.setItem(
        String(String(Config.TOKEN_REFRESH_STORAGE_ENCRYPTED)),
        refreshTokenEncrypted,
      );

      const fcmToken = await messaging().getToken();
      const brand = DeviceInfo.getBrand();
      const model = DeviceInfo.getModel();

      const payload = {
        token: fcmToken,
        deviceBrand: brand,
        deviceModel: model,
      };

      try {
        await axios.post(
          `${String(Config.GENERAL_API)}/Athlete/RegisterDeviceToken`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${user.token}`, // Ajusta según dónde tengas tu token JWT
            },
          },
        );
      } catch (err) {
        console.log('Error al registrar el fcmToken:', err);
      }

      dispatch({type: 'signUp', payload: user});
    } catch (error) {
      console.error('Error during signIn:', error);
    }
  }, []);

  /**
   * Updates the athlete.
   * @param athlete - The athlete to be updated.
   */
  const updateAthlete = useCallback((athlete: AthleteEditResponseModel) => {
    dispatch({type: 'updateAthlete', payload: athlete});
  }, []);

  /**
   * Gets the gym.
   * @param gym - The gym to be set.
   */
  const getGym = useCallback((gym: Gym) => {
    dispatch({type: 'addGym', payload: gym});
  }, []);

  /**
   * Logs out the user.
   */
  const logOut = useCallback(() => {
    AsyncStorage.removeItem(String(Config.TOKEN_STORAGE_ENCRYPTED));
    AsyncStorage.removeItem(String(Config.TOKEN_REFRESH_STORAGE_ENCRYPTED));
    dispatch({type: 'logOut'});
  }, []);

  /**
   * Checks the user's login status.
   */
  const checkLogin = useCallback(async () => {
    const getKey = await encryptionService.getOrCreateEncryptionKey();
    const refreshToken = await AsyncStorage.getItem(
      String(Config.TOKEN_REFRESH_STORAGE_ENCRYPTED),
    );
    const refreshTokenDecrypted = refreshToken
      ? await encryptionService.getDecryptedData(refreshToken, getKey)
      : '';

    if (refreshTokenDecrypted) {
      try {
        const response = await axios.post(
          `${String(Config.GENERAL_API)}/Athlete/refreshToken`,
          null,
          {
            headers: {
              RefreshToken: refreshTokenDecrypted,
            },
          },
        );

        if (response.status !== 200) {
          return dispatch({type: 'notAuthenticated'});
        }

        const tokenEncrypted = await encryptionService.cipherData(
          response.data.data.token,
          getKey,
        );

        await AsyncStorage.setItem(
          String(Config.TOKEN_STORAGE_ENCRYPTED),
          tokenEncrypted,
        );

        const refreshTokenEncrypted = await encryptionService.cipherData(
          response.data.data.refreshToken,
          getKey,
        );

        await AsyncStorage.setItem(
          String(Config.TOKEN_REFRESH_STORAGE_ENCRYPTED),
          refreshTokenEncrypted,
        );

        const athlete = new Athlete({
          athleteId: response.data.data.athleteId,
          athleteName: response.data.data.athleteName,
          athleteLastName: response.data.data.athleteLastName,
          email: response.data.data.email,
          phoneNumber: response.data.data.phoneNumber,
          birthDate: response.data.data.birthDate,
          genre: response.data.data.genre,
          status: response.data.data.status,
          token: null,
          refreshToken: null,
          startDate: response.data.data.startDate,
          endDate: response.data.data.endDate,
          membershipName: response.data.data.membershipName,
          membershipId: response.data.data.membershipId,
          idGym: response.data.data.idGym,
        });

        dispatch({type: 'signUp', payload: athlete});
      } catch (error) {
        console.log('Error during checkLogin:', error);
        dispatch({type: 'notAuthenticated'});
      }
    } else {
      dispatch({type: 'notAuthenticated'});
      return;
    }
  }, []);

  useEffect(() => {
    let unsubscribeOnTokenRefresh: (() => void) | null = null;

    if (state.status === 'authenticated' && state.athlete) {
      unsubscribeOnTokenRefresh = messaging().onTokenRefresh(async newToken => {
        try {
          const getKey = await encryptionService.getOrCreateEncryptionKey();
          const token = await AsyncStorage.getItem(
            String(Config.TOKEN_STORAGE_ENCRYPTED),
          );
          const tokenDecrypted = token
            ? await encryptionService.getDecryptedData(token, getKey)
            : '';

          const result = await axios.post(
            `${String(Config.GENERAL_API)}/Athlete/RegisterDeviceToken`,
            {deviceToken: newToken},
            {
              headers: {
                Authorization: `Bearer ${tokenDecrypted}`,
              },
            },
          );
        } catch (err) {
          console.log('Error al refrescar el token en backend:', err);
        }
      });
    }

    // Al desmontar o cambiar estado, desuscribimos
    return () => {
      if (unsubscribeOnTokenRefresh) {
        unsubscribeOnTokenRefresh();
      }
    };
  }, [state.status, state.athlete]);

  const value = useMemo(
    () => ({
      error: state.error,
      status: state.status,
      athlete: state.athlete,
      gym: state.gym,
      signIn,
      logOut,
      checkLogin,
      getGym,
      updateAthlete,
    }),
    [state, signIn, logOut, checkLogin, getGym, updateAthlete],
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
