import {
  View,
  Text,
  useWindowDimensions,
  ImageStyle,
  StyleProp,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  MotiImage,
  MotiTransitionProp,
  MotiView,
  StyleValueWithReplacedTransforms,
} from 'moti';
import MaskedView from '@react-native-masked-view/masked-view';
import onboardingStyles from '../welcome/style';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {BackgoundComponent, GradientButton} from '../../../components';
import {StackScreenProps} from '@react-navigation/stack';
import {RootOnboardingStackParamList} from '../../../navigation/OnboardingStackNavigation';

interface OnboardingProps
  extends StackScreenProps<RootOnboardingStackParamList, 'about'> {}

const AboutScreen = ({navigation}: OnboardingProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Personaliza tu plan',
    'Registra fácilmente',
    'Ve tu progreso',
  ];
  const {width} = useWindowDimensions();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % titles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [titles.length]);

  const handleNext = useCallback(() => {
    navigation.replace('login');
  }, [navigation]);

  const dynamicStyles = useMemo(
    () => ({
      imageStyle: {
        width: width * 0.6,
        height: width * 0.6,
        alignSelf: 'center',
        borderRadius: 200,
        backgroundColor: 'rgba(132, 147, 149, 0.2)',
      } as StyleProp<ImageStyle>,
      iconGraphStyle: {
        ...onboardingStyles.imageStyle,
        width: width * 0.11,
        height: width * 0.11,
        backgroundColor: '#98E0D3',
      } as StyleProp<ImageStyle>,
      iconMuscleStyle: {
        ...onboardingStyles.imageStyle,
        width: width * 0.11,
        height: width * 0.11,
        backgroundColor: 'blue',
      } as StyleProp<ImageStyle>,
      iconPieStyle: {
        ...onboardingStyles.imageStyle,
        width: width * 0.11,
        height: width * 0.11,
        backgroundColor: 'violet',
      } as StyleProp<ImageStyle>,
      iconAthleteStyle: {
        ...onboardingStyles.imageStyle,
        width: width * 0.11,
        height: width * 0.11,
        backgroundColor: 'orange',
      } as StyleProp<ImageStyle>,
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
          source={require('../../../assets/graph.png')}
          style={dynamicStyles.imageStyle}
          from={{opacity: 0, translateY: 120}}
          animate={{opacity: 1, translateY: 0}}
          transition={
            {type: 'timing', duration: 450} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/icon-graph.png')}
          style={dynamicStyles.iconGraphStyle}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 1, translateY: 80, translateX: 160}}
          transition={
            {type: 'timing', duration: 600} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/icon-muscle.png')}
          style={dynamicStyles.iconMuscleStyle}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 1, translateY: 80, translateX: -110}}
          transition={
            {type: 'timing', duration: 600} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/pie.png')}
          style={dynamicStyles.iconPieStyle}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 1, translateY: -140, translateX: -110}}
          transition={
            {type: 'timing', duration: 600} as MotiTransitionProp<
              StyleValueWithReplacedTransforms<ImageStyle>
            >
          }
        />
        <MotiImage
          source={require('../../../assets/icon-athlete.png')}
          style={dynamicStyles.iconAthleteStyle}
          from={{opacity: 0, translateY: 0, translateX: 0}}
          animate={{opacity: 1, translateY: -140, translateX: 160}}
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
          maskElement={
            <Text
              style={{
                ...onboardingStyles.title,
                backgroundColor: 'transparent',
                color: 'white',
              }}>
              Cada viaje es único
            </Text>
          }>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#40B6A6', '#849395', '#BD5AA2']}>
            <Text style={{...onboardingStyles.title, opacity: 0}}>
              Cada viaje es único
            </Text>
          </LinearGradient>
        </MaskedView>
        <Text
          style={{
            ...onboardingStyles.title,
            color: 'white',
          }}>
          {titles[currentIndex]}
        </Text>
        <Text style={onboardingStyles.description}>Tu saud a tu manera</Text>
      </MotiView>
      <GradientButton handleButton={handleNext} title={'Siguiente'} />
    </BackgoundComponent>
  );
};

export default React.memo(AboutScreen);
