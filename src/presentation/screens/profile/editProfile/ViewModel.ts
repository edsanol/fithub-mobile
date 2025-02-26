import {useCallback, useContext, useEffect, useState} from 'react';
import {AthleteEditRequestModel} from '../../../../domain/models/AthleteEditRequestModel';
import {UserContext} from '../../../context/UserContext';
import {editAthleteUseCase} from '../../../../config/AthleteContainer/container';

type InputsKey = keyof AthleteEditRequestModel;

const inputsInformation: {
  name: InputsKey;
  placeholder: string;
  label: string;
  editable?: boolean;
  keyboardType?: 'default' | 'number-pad' | 'email-address';
}[] = [
  {
    name: 'athleteName',
    placeholder: 'Ingresa tu nombre',
    label: 'Nombre',
    keyboardType: 'default',
    editable: true,
  },
  {
    name: 'athleteLastName',
    placeholder: 'Ingresa tu apellido',
    label: 'Apellido',
    keyboardType: 'default',
    editable: true,
  },
  {
    name: 'email',
    placeholder: 'Correo',
    label: 'Ingresa tu email',
    keyboardType: 'email-address',
    editable: false,
  },
  {
    name: 'phoneNumber',
    placeholder: 'Ingresa tu telefono',
    label: 'Telefono',
    keyboardType: 'number-pad',
    editable: false,
  },
];

export const masterData = [
  {
    value: 'M',
    label: 'Masculino',
  },
  {
    value: 'F',
    label: 'Femenimo',
  },
];

const EditProfileViewModel = () => {
  const {athlete, updateAthlete} = useContext(UserContext);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [canSave, setCanSave] = useState(false);
  const [inputs, setInputs] = useState<AthleteEditRequestModel>({
    athleteName: athlete?.athleteName || '',
    athleteLastName: athlete?.athleteLastName || '',
    email: athlete?.email || '',
    phoneNumber: athlete?.phoneNumber || '',
    birthDate: athlete?.birthDate || '',
    genre: athlete?.genre || '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (athlete) {
      setInputs({
        athleteName: athlete?.athleteName || '',
        athleteLastName: athlete?.athleteLastName || '',
        email: athlete?.email || '',
        phoneNumber: athlete?.phoneNumber || '',
        birthDate: athlete?.birthDate || '',
        genre: athlete?.genre || '',
      });
    }
  }, [athlete]);

  useEffect(() => {
    if (athlete) {
      const isFilled = Object.values(inputs).every(value => value !== '');
      const isChanged = Object.entries(inputs).some(
        ([key, value]) =>
          value !== athlete[key as keyof AthleteEditRequestModel],
      );
      setCanSave(isFilled && isChanged);
    }
  }, [inputs, athlete]);

  const handleEditAthlete = useCallback(async () => {
    try {
      setLoading(true);
      const response = await editAthleteUseCase.execute(inputs);
      updateAthlete(response);
    } catch (error) {
      console.log('error 1', error);
    } finally {
      setLoading(false);
    }
  }, [inputs, athlete]);

  const handleInputChange = (name: string, value: string) => {
    setInputs({...inputs, [name]: value});
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const adjustedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000,
    );
    const formattedDate = adjustedDate.toISOString().split('T')[0];

    setInputs({
      ...inputs,
      birthDate: formattedDate,
    });
    hideDatePicker();
  };

  const handleSelectChange = (value: string) => {
    setInputs({...inputs, genre: value});
  };

  return {
    inputsInformation,
    isDatePickerVisible,
    inputs,
    masterData,
    athlete,
    canSave,
    loading,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    handleInputChange,
    handleSelectChange,
    handleEditAthlete,
  };
};

export default EditProfileViewModel;
