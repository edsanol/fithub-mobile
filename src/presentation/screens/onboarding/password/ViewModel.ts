import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import axios from 'axios';
import { Athlete } from '../../../../domain/entities/Athlete';
import { AthleteModel } from '../../../../domain/models/AthleteModel';
import { TickerResponseApi } from '../../../../data/api/models/tickerResponseApi';
import Config from 'react-native-config';

const LoginViewModel = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn } = useContext(UserContext);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<TickerResponseApi<AthleteModel>>(
        `${String(Config.GENERAL_API)}/Athlete/Login`,
        {
          email,
          password,
        },
      );

      if (response.data.data.athleteId === null) {
        throw new Error('Error de autenticación');
      }

      const athlete: Athlete = {
        athleteId: response.data.data.athleteId,
        athleteName: response.data.data.athleteName,
        athleteLastName: response.data.data.athleteLastName,
        email: response.data.data.email,
        phoneNumber: response.data.data.phoneNumber,
        birthDate: response.data.data.birthDate,
        genre: response.data.data.genre,
        status: response.data.data.status,
        token: response.data.data.token,
        refreshToken: response.data.data.refreshToken,
        startDate: response.data.data.startDate,
        endDate: response.data.data.endDate,
        membershipName: response.data.data.membershipName,
        membershipId: response.data.data.membershipId,
        idGym: response.data.data.idGym,
      };

      signIn(athlete);
    } catch (error) {
      console.log('error 5', error);
      handleError('Error de autenticación');
    }
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleError = (error: string) => {
    setError(error);
  };

  return { login, handlePassword, handleError, password, error };
};

export default LoginViewModel;
