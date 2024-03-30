import { TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useEffect, useRef } from 'react';

const TabButton = ({ icon, title, accessibilityState, onPress }: any) => {
  const animatedValues = {
    translate: useRef(new Animated.Value(0)).current,
    scale: useRef(new Animated.Value(0)).current,
  };

  const { translate, scale } = animatedValues;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      handleAnimated();
    }

    return () => {
      isMounted = false;
    };
  }, [accessibilityState.selected]);

  const handleAnimated = () => {
    Animated.parallel([
      Animated.timing(translate, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(scale, {
        toValue: accessibilityState.selected ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const translateStyles = {
    transform: [
      {
        translateY: translate.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -14],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const scaleStyles = {
    opacity: scale.interpolate({
      inputRange: [0.5, 1],
      outputRange: [0.5, 1],
      extrapolate: 'clamp',
    }),
    transform: [
      {
        scale: scale,
      },
    ],
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Animated.View style={[styles.button, translateStyles]}>
        <Animated.View
          style={[
            {
              width: 50,
              height: 50,
              borderRadius: 25,
              position: 'absolute',
              backgroundColor: '#2A49FF',
            },
            scaleStyles,
          ]}
        />
        <Icon
          name={icon}
          size={24}
          color={accessibilityState.selected ? 'white' : 'white'}
        />
      </Animated.View>
      <Animated.Text style={[styles.title, { opacity: scale }]}>
        {title}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default TabButton;
