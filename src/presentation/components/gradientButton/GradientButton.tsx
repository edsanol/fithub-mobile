import {MotiView} from 'moti';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import gradientButtonStyle from './style';

interface GradientButtonProps {
  handleButton: () => void;
  title: string;
}

const GradientButton = ({handleButton, title}: GradientButtonProps) => {
  const {width} = useWindowDimensions();

  return (
    <TouchableWithoutFeedback onPress={handleButton}>
      <View style={{width: width * 0.8, aspectRatio: 4.4}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#40B6A6', '#849395', '#BD5AA2']}
          style={{borderRadius: 48, padding: 3}}>
          <MotiView
            style={[
              gradientButtonStyle.button,
              {width: '100%', backgroundColor: '#100E1D'},
            ]}
            from={{opacity: 0, translateY: 50}}
            animate={{opacity: 1, translateY: 0}}
            transition={{type: 'timing', duration: 450}}>
            <Text style={gradientButtonStyle.textButton}>{title}</Text>
          </MotiView>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default GradientButton;
