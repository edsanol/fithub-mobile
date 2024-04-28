import {
  ImageStyle,
  StyleProp,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  MotiView,
  MotiImage,
  MotiTransitionProp,
  StyleValueWithReplacedTransforms,
} from 'moti';
import onboardingStyles from './style';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {StackScreenProps} from '@react-navigation/stack';
import {RootOnboardingStackParamList} from '../../../navigation/OnboardingStackNavigation';
import {BackgoundComponent, GradientButton} from '../../../components';
import React, {useMemo} from 'react';

const titleStyle = {
  ...onboardingStyles.title,
  backgroundColor: 'transparent',
  color: 'white',
};

const maskedTextStyle = {
  ...onboardingStyles.title,
  opacity: 0,
};

interface OnboardingProps
  extends StackScreenProps<RootOnboardingStackParamList, 'Welcome'> {}

const OnboardingScreen = ({navigation}: OnboardingProps) => {
  const {width} = useWindowDimensions();

  const handleNext = () => {
    navigation.navigate('about');
  };

  const imageAthleteSize: StyleProp<ImageStyle> = useMemo(
    () => ({
      width: width * 0.5,
      height: width * 0.5,
      alignSelf: 'center',
    }),
    [width],
  );

  const imageMancuernaSize: StyleProp<ImageStyle> = useMemo(
    () => ({
      ...onboardingStyles.imageStyle,
      width: width * 0.2,
      height: width * 0.2,
      borderColor: '#98E0D3',
      backgroundColor: '#98E0D3',
    }),
    [width],
  );

  const imageBallSize: StyleProp<ImageStyle> = useMemo(
    () => ({
      ...onboardingStyles.imageStyle,
      width: width * 0.16,
      height: width * 0.16,
      borderColor: 'orange',
      backgroundColor: 'orange',
    }),
    [width],
  );

  const imageTapeteSize: StyleProp<ImageStyle> = useMemo(
    () => ({
      ...onboardingStyles.imageStyle,
      width: width * 0.18,
      height: width * 0.18,
      borderColor: '#C5F0F5',
      backgroundColor: '#C5F0F5',
    }),
    [width],
  );

  const imageLazoSize: StyleProp<ImageStyle> = useMemo(
    () => ({
      ...onboardingStyles.imageStyle,
      width: width * 0.14,
      height: width * 0.14,
      borderColor: 'violet',
      backgroundColor: 'violet',
    }),
    [width],
  );

  return (
    <BackgoundComponent
      styles={{
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View style={onboardingStyles.imageContainer}>
        <MotiImage
          source={require('../../../assets/athlete.png')}
          style={imageAthleteSize}
          from={{opacity: 0, translateY: 90}}
          animate={{opacity: 1, translateY: 0}}
          transition={
            {type: 'timing', duration: 300} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/mancuerna.png')}
          style={imageMancuernaSize}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 0.6, translateY: 50, translateX: 150}}
          transition={
            {type: 'timing', duration: 600} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/ball.png')}
          style={imageBallSize}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 0.6, translateY: 110, translateX: -10}}
          transition={
            {type: 'timing', duration: 700} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/tapete.png')}
          style={imageTapeteSize}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 0.6, translateY: -60, translateX: -90}}
          transition={
            {type: 'timing', duration: 800} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/lazo.png')}
          style={imageLazoSize}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 0.6, translateY: -150, translateX: 90}}
          transition={
            {type: 'timing', duration: 600} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
      </View>
      <MotiView
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={
          {type: 'timing', duration: 300} as MotiTransitionProp<
            StyleValueWithReplacedTransforms<ImageStyle>
          >
        }>
        <MaskedView
          maskElement={<Text style={titleStyle}>¡FitHub Connect!</Text>}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#40B6A6', '#849395', '#BD5AA2']}>
            <Text style={maskedTextStyle}>¡FitHub Connect!</Text>
          </LinearGradient>
        </MaskedView>
        <Text style={onboardingStyles.description}>
          Tu viaje hacia una vida más saludable comienza aquí. Con FitHub
          Connect, podrás rastrear tu progreso, planificar tu nutrición y
          mantener la motivación para alcanzar tus objetivos.
        </Text>
      </MotiView>
      <GradientButton handleButton={handleNext} title={'Comenzar'} />
    </BackgoundComponent>
  );
};

export default React.memo(OnboardingScreen);
