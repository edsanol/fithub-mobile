import {View, Text} from 'react-native';
import {RoutineDetailStyles} from '../styles';

interface RoutineDescriptionProps {
  description: string;
}

const RoutineDescription = ({description}: RoutineDescriptionProps) => {
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 4}}>
      <Text style={RoutineDetailStyles.descriptionTitleText}>
        Acerca del Entrenamiento
      </Text>
      <Text
        style={{
          color: 'white',
          marginBottom: 14,
          paddingHorizontal: 4,
        }}>
        {description}
      </Text>
      <Text style={RoutineDetailStyles.descriptionTitleText}>
        Todos los ejercicios
      </Text>
    </View>
  );
};

export default RoutineDescription;
