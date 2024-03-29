import {useContext, useState} from 'react';
import axios from 'axios';
import {Athlete} from '../../../../domain/entities/Athlete';
import {UserContext} from '../../../context/UserContext';
import {AthleteModel} from '../../../../domain/models/AthleteModel';
import {TickerResponseApi} from '../../../../data/api/models/tickerResponseApi';

const RegisterViewModel = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const {signIn} = useContext(UserContext);

  const register = async (email: string, password: string) => {
    const response = await axios.post<TickerResponseApi<AthleteModel>>(
      'http://192.168.0.2:45455/api/Athlete/CreatePassword',
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
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleConfirmPassword = (password: string) => {
    setConfirmPassword(password);
  };

  const handleError = (error: string) => {
    setError(error);
  };

  return {
    register,
    handlePassword,
    handleError,
    handleConfirmPassword,
    password,
    error,
    confirmPassword,
  };
};

export default RegisterViewModel;
