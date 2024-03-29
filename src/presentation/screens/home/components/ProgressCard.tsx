import {View, Text, TouchableOpacity, Image} from 'react-native';
import homeStyles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {mapperMuscleIcon, mapperMuscleNames} from '../../../helper';
import {LastMeasurements} from '../../../../domain/entities/LastMeasurements';

interface ProgressCardProps {
  measurement: LastMeasurements;
  navigation: any;
}

const ProgressCard = ({measurement, navigation}: ProgressCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={homeStyles.progressCards}
      onPress={() => {
        if (measurement.measurement === 0) return;
        navigation.navigate('MeasurementStats', {data: measurement});
      }}>
      <View style={homeStyles.progressCardsImageContainer}>
        <Image
          source={mapperMuscleIcon(measurement.muscle)}
          style={{width: '100%', height: '100%', borderRadius: 14}}
          resizeMode="cover"
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            ...homeStyles.ProgressCardInfoData,
            justifyContent: 'space-between',
          }}>
          <Text style={homeStyles.progressCardsTitle}>
            {mapperMuscleNames(measurement.muscle)}
          </Text>
          <Text style={homeStyles.progressCardInfoText}>
            {measurement.measurement}
            {measurement.muscle === 'Weight' ? ' kg' : ' cm'}
          </Text>
        </View>
        <View style={homeStyles.ProgressCardInfoData}>
          <Text style={homeStyles.cardProgressText}>
            Has obtenido un progreso del
          </Text>
          <Text
            style={{
              ...homeStyles.progressCardLabel,
              color:
                measurement.progressPercentage > 0
                  ? '#008F39'
                  : measurement.progressPercentage < 0
                  ? '#DE0011'
                  : '#FFFFFF',
            }}>
            {measurement.progressPercentage.toFixed(2)} {'%'}
          </Text>
        </View>
        <View style={homeStyles.ProgressCardInfoData}>
          <Text style={homeStyles.cardProgressText}>Has aumentado</Text>
          <Text
            style={{
              ...homeStyles.progressCardLabel,
              color:
                measurement.progress > 0
                  ? '#008F39'
                  : measurement.progress < 0
                  ? '#DE0011'
                  : '#FFFFFF',
            }}>
            {measurement.progress.toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: '100%',
          width: 24,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={'chevron-forward'} size={20} color={'#FFFFFF'} />
      </View>
    </TouchableOpacity>
  );
};

export default ProgressCard;
