import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '600',
    marginBottom: 8,
    backgroundColor: 'transparent',
    color: 'white',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 38,
    fontWeight: '600',
    marginBottom: 8,
    opacity: 0,
  },
  descriptionText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
  },
  inputContainer: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: '#1F222A',
    borderRadius: 28,
    height: 48,
    marginVertical: 12,
    paddingHorizontal: 12,
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
  },
  footerContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    marginBottom: 12,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
  },
  footerTextBold: {
    color: 'white',
    fontWeight: '800',
  },
  footerTextLink: {
    color: 'blue',
    fontWeight: '800',
  },
  errorText: {
    color: '#DE0011',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default loginStyles;
