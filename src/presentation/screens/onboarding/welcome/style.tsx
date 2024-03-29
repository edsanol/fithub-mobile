import {StyleSheet} from 'react-native';

const onboardingStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '600',
    marginBottom: 8,
  },
  animatedTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 8,
    color: 'white',
  },
  description: {
    textAlign: 'center',
    marginHorizontal: 28,
    fontSize: 14,
    color: 'white',
    lineHeight: 20,
  },
  imageContainer: {
    height: '40%',
    width: '100%',
    justifyContent: 'center',
  },
  imageStyle: {
    borderWidth: 4,
    borderRadius: 100,
    position: 'absolute',
    top: '50%',
    right: '50%',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default onboardingStyles;
