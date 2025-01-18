import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Exercise} from '../../../../../domain/entities/Exercise';
import {RoutineDetailStyles} from '../styles';
import RoutineListStyles from '../../RoutineList/Style';
import Icon from 'react-native-vector-icons/Ionicons';

interface RoutineDetailCardProps {
  item: Exercise;
  onPress: (item: Exercise) => void;
}

const RoutineDetailCard: React.FC<RoutineDetailCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={RoutineDetailStyles.progressCards}
      onPress={() => onPress(item)}>
      <View style={RoutineDetailStyles.progressCardsImageContainer}>
        <Image
          source={{uri: item.imageURL}}
          style={RoutineDetailStyles.cardImage}
          resizeMode="cover"
        />
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            ...RoutineListStyles.ProgressCardInfoData,
            justifyContent: 'space-between',
          }}>
          <Text
            style={RoutineDetailStyles.progressCardsTitle}
            maxFontSizeMultiplier={1.3}>
            {item.exerciseTitle}
          </Text>
        </View>
        <View style={RoutineListStyles.ProgressCardInfoData}>
          <Icon
            name={'time'}
            size={14}
            color={'#FFFFFF'}
            style={{paddingLeft: 20}}
          />
          <Text
            style={RoutineListStyles.cardProgressText}
            maxFontSizeMultiplier={1.1}>
            {`${item.duration} Minutos`}
          </Text>
        </View>
        <View style={RoutineListStyles.ProgressCardInfoData}>
          <Icon
            name={'cube'}
            size={14}
            color={'#FFFFFF'}
            style={{paddingLeft: 20}}
          />
          <Text
            style={RoutineListStyles.cardProgressText}
            maxFontSizeMultiplier={1.1}>
            {`${item.routineExerciseSets.length} Sets`}
          </Text>
        </View>
      </View>
      <View style={RoutineDetailStyles.rightIconContainer}>
        <Icon name={'chevron-forward'} size={20} color={'#FFFFFF'} />
      </View>
    </TouchableOpacity>
  );
};

export default RoutineDetailCard;
