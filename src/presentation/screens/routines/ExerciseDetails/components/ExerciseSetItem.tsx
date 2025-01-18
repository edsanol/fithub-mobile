import {View, Text} from 'react-native';
import exerciseDetailStyles from '../styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface ExerciseSetItemProps {
  text: string;
  icon: string;
  color?: string;
}

const ExerciseSetItem = ({text, icon, color}: ExerciseSetItemProps) => {
  return (
    <View style={exerciseDetailStyles.setItem}>
      <Icon
        name={icon}
        size={14}
        color={color ? color : '#FFFFFF'}
        style={{paddingRight: 4}}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          color: color ? color : '#FFFFFF',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default ExerciseSetItem;
