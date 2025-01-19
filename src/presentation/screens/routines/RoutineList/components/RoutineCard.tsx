import {View, Text, TouchableOpacity, Image} from 'react-native';
import RoutineListStyles from '../Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Routine} from '../../../../../domain/entities/Routine';

interface RoutineCardProps {
  item: Routine;
  onPress: (item: Routine) => void;
}

const RoutineCard: React.FC<RoutineCardProps> = ({item, onPress}) => {
  const duration = item.exercises.reduce((acc, curr) => acc + curr.duration, 0);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={RoutineListStyles.progressCards}
      onPress={() => onPress(item)}>
      <View style={RoutineListStyles.progressCardsImageContainer}>
        <Image
          source={{uri: item.imageURL}}
          style={{width: '100%', height: '100%', borderRadius: 14}}
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
            style={RoutineListStyles.progressCardsTitle}
            maxFontSizeMultiplier={1.3}>
            {item.title}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-evenly',
            }}>
            <View style={RoutineListStyles.ProgressCardInfoData}>
              <Icon
                name={'barbell'}
                size={14}
                color={'#FFFFFF'}
                style={{paddingLeft: 20}}
              />
              <Text
                style={RoutineListStyles.cardProgressText}
                maxFontSizeMultiplier={1.1}>
                {`${item.exercises.length} ejercicios`}
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
                {`${duration} Minutos`}
              </Text>
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                color: '#D0D0D0',
                fontSize: 11,
                fontWeight: '400',
                backgroundColor:
                  item.status === 'Active'
                    ? '#2A49FF'
                    : item.status === 'Inactive'
                    ? '#DE0011'
                    : '#008F39',
                padding: 4,
                borderRadius: 8,
              }}>
              {item.status}
            </Text>
          </View>
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

export default RoutineCard;
