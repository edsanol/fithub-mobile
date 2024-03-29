import {useState} from 'react';
import axios from 'axios';
import {TickerResponseApi} from '../../../../data/api/models/tickerResponseApi';

const LoginViewModel = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const login = async (email: string) => {
    const response = await axios.post<TickerResponseApi<number>>(
      'http://192.168.0.2:45455/api/Athlete/VerifyLogin',
      {
        email,
      },
    );

    return response.data.data;
  };

  const handleEmail = (email: string) => {
    setEmail(email);
  };

  const handleError = (error: string) => {
    setError(error);
  };

  return {
    login,
    handleEmail,
    handleError,
    email,
    error,
  };
};

export default LoginViewModel;
