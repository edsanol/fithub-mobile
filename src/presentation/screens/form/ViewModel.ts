import {useContext, useEffect, useState} from 'react';
import {IMeasurementProgress} from '../../interfaces/measurementProgress';
import {
  getLastMeasurementRegisteredUseCase,
  recordMeasurementProgressUseCase,
} from '../../../config/MeasurementContainer/container';
import {MeasurementEntity} from '../../../domain/entities/MeasurementEntity';

type MeasurementKey = keyof IMeasurementProgress;

const inputsInformation: {
  name: MeasurementKey;
  placeholder: string;
  label: string;
}[] = [
  {
    name: 'gluteus',
    placeholder: 'Medida de Gluteos en cm',
    label: 'Gluteos (cm)',
  },
  {name: 'biceps', placeholder: 'Medida de Biceps en cm', label: 'Biceps (cm)'},
  {name: 'chest', placeholder: 'Medida de Pecho en cm', label: 'Pecho (cm)'},
  {
    name: 'waist',
    placeholder: 'Medida de Cintura en cm',
    label: 'Cintura (cm)',
  },
  {name: 'thigh', placeholder: 'Medida de Pierna en cm', label: 'Pierna (cm)'},
  {
    name: 'calf',
    placeholder: 'Medida de Pantorrilla en cm',
    label: 'Pantorrilla (cm)',
  },
  {
    name: 'shoulders',
    placeholder: 'Medida de Espalda en cm',
    label: 'Espalda (cm)',
  },
  {
    name: 'forearm',
    placeholder: 'Medida de Antebrazo en cm',
    label: 'Antebrazo (cm)',
  },
  {
    name: 'height',
    placeholder: 'Medida de Estatura en cm',
    label: 'Estatura (cm)',
  },
  {name: 'weight', placeholder: 'Medida del Peso en kg', label: 'Peso (kg)'},
];

const FormViewModel = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [inputs, setInputs] = useState<IMeasurementProgress>({
    gluteus: null,
    biceps: null,
    chest: null,
    waist: null,
    thigh: null,
    calf: null,
    shoulders: null,
    forearm: null,
    height: null,
    weight: null,
  });
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    handleGetLastMeasurements();
  }, []);

  const handleGetLastMeasurements = async () => {
    try {
      setLoading(true);
      const responseMeasurements =
        await getLastMeasurementRegisteredUseCase.execute({
          numPage: 1,
          numRecordsPage: 1,
          startDate: new Date().toISOString().split('T')[0].slice(0, 8) + '01',
        });

      if (responseMeasurements) {
        const lastMeasurement = responseMeasurements;
        setInputs({
          gluteus: lastMeasurement.gluteus,
          biceps: lastMeasurement.biceps,
          chest: lastMeasurement.chest,
          waist: lastMeasurement.waist,
          thigh: lastMeasurement.thigh,
          calf: lastMeasurement.calf,
          shoulders: lastMeasurement.shoulders,
          forearm: lastMeasurement.forearm,
          height: lastMeasurement.height,
          weight: lastMeasurement.weight,
        });
      }
    } catch (error) {
      console.log('error 4', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (name: string, value: string) => {
    let newText: string = value.replace(/[^0-9.]/g, '');

    const firstDotIndex = newText.indexOf('.');

    if (firstDotIndex !== -1) {
      let integerPart = newText.substring(0, firstDotIndex);
      integerPart = integerPart === '' ? '0' : integerPart;
      const decimalPart = newText
        .substring(firstDotIndex + 1)
        .replace(/\./g, '');
      newText = `${integerPart}.${decimalPart}`;
    }

    setInputs({...inputs, [name]: newText});

    if (errors[name]) {
      setErrors({...errors, [name]: ''});
    }
  };

  const handleSave = async () => {
    try {
      let isValid = true;
      const newErrors: any = {};

      Object.entries(inputs).forEach(([key, value]) => {
        if (isNaN(value) || value === '' || value === null) {
          isValid = false;
          newErrors[key] = 'Debe ser un número y no puede estar vacío';
        }
      });

      if (!isValid) {
        setErrors(newErrors);
        return;
      }

      const measurementEntity = new MeasurementEntity({
        gluteus: inputs.gluteus!,
        biceps: inputs.biceps!,
        chest: inputs.chest!,
        waist: inputs.waist!,
        thigh: inputs.thigh!,
        calf: inputs.calf!,
        shoulders: inputs.shoulders!,
        forearm: inputs.forearm!,
        height: inputs.height!,
        weight: inputs.weight!,
      });

      const response = await recordMeasurementProgressUseCase.execute(
        measurementEntity,
      );

      await handleGetLastMeasurements();
    } catch (error) {
      console.log('error 3', error);
    }
  };

  return {
    inputs,
    errors,
    loading,
    inputsInformation,
    handleInputChange,
    handleSave,
  };
};

export default FormViewModel;
