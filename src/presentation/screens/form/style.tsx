import {StyleSheet} from 'react-native';

const formStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  header: {
    height: '6%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 12,
  },
  subtitleText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#4D5058',
    paddingHorizontal: '24%',
    textAlign: 'center',
  },
  textInputContainer: {
    maxHeight: '48%',
    minHeight: '48%',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  buttonContainer: {
    height: '16%',
    justifyContent: 'center',
  },
  button: {
    height: 48,
    width: '64%',
    borderRadius: 18,
    backgroundColor: '#2A49FF',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default formStyles;
