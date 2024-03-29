import {useState} from 'react';
import {measurementGraphicUseCase} from '../../../config/MeasurementContainer/container';
import {ChartEntity} from '../../../domain/entities/ChartEntity';

const MeasurementViewModel = () => {
  const [error, setError] = useState('');
  const [measurementChart, setMeasurementChart] = useState<ChartEntity[]>([]);
  const [loading, setLoading] = useState(true);

  const getMeasurementChart = async (
    athleteId: number,
    muscle: string,
    startDate: string | Date,
    endDate: string | Date,
  ) => {
    try {
      setLoading(true);
      const response: ChartEntity[] = await measurementGraphicUseCase.execute(
        athleteId,
        muscle,
        startDate,
        endDate,
      );

      setMeasurementChart(response);
    } catch (error) {
      console.log('error', error);
      handleError('Error al obtener el gráfico');
    } finally {
      setLoading(false);
    }
  };

  const handleError = (error: string) => {
    setError(error);
  };

  const handleLoading = (loading: boolean) => {
    setLoading(loading);
  };

  return {error, measurementChart, loading, getMeasurementChart, handleLoading};
};

export default MeasurementViewModel;
