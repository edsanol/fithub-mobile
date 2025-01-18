import {View, Text} from 'react-native';
import {RoutineDetailStyles} from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface RoutineItemsProps {
  text: string;
  icon: string;
}

const RoutineItems = ({text, icon}: RoutineItemsProps) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name={icon} size={14} color={'#FFFFFF'} style={{paddingLeft: 20}} />
      <Text
        style={RoutineDetailStyles.cardProgressText}
        maxFontSizeMultiplier={1.1}>
        {text}
      </Text>
    </View>
  );
};

export default RoutineItems;
