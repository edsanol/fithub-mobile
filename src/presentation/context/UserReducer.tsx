import {Athlete} from '../../domain/entities/Athlete';
import {Gym} from '../../domain/entities/Gym';
import {AthleteEditResponseModel} from '../../domain/models/AthleteEditResponseModel';

export interface UserState {
  error: string;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  athlete: Athlete | null;
  gym: Gym | null;
  signIn: () => void;
  logOut: () => void;
  checkLogin: () => void;
  getGym: () => void;
  updareAthlete: () => void;
}

type UserAction =
  | {type: 'signUp'; payload: Athlete}
  | {type: 'addGym'; payload: Gym}
  | {type: 'addError'; payload: string}
  | {type: 'updateAthlete'; payload: AthleteEditResponseModel}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'checking'}
  | {type: 'authenticated'}
  | {type: 'logOut'};

export const userReducer = (
  state: UserState,
  action: UserAction,
): UserState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        error: action.payload,
      };
    case 'removeError':
      return {
        ...state,
        error: '',
      };
    case 'checking':
      return {
        ...state,
        status: 'checking',
      };
    case 'authenticated':
      return {
        ...state,
        status: 'authenticated',
      };
    case 'notAuthenticated':
      return {
        ...state,
        status: 'not-authenticated',
      };
    case 'logOut':
      return {
        ...state,
        status: 'not-authenticated',
      };
    case 'signUp':
      return {
        ...state,
        status: 'authenticated',
        athlete: action.payload,
      };
    case 'updateAthlete':
      return {
        ...state,
        // partial update
        athlete: {
          ...state.athlete!,
          athleteName: action.payload.athleteName,
          athleteLastName: action.payload.athleteLastName,
          genre: action.payload.genre,
          birthDate: action.payload.birthDate,
          email: action.payload.email,
          phoneNumber: action.payload.phoneNumber,
        },
      };
    case 'addGym':
      return {
        ...state,
        gym: action.payload,
      };
    default:
      return state;
  }
};
