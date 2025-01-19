import {StyleSheet} from 'react-native';

const exerciseDetailStyles = StyleSheet.create({
  mainContainer: {
    minHeight: 120,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 16,
    marginTop: 20,
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
  exerciseDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 8,
    marginHorizontal: 8,
  },
  exerciseTitle: {
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 16,
  },
  setsContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    borderRadius: 10,
    backgroundColor: 'rgba(50, 0, 240, 0.1)',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginVertical: 4,
    padding: 4,
  },
  setItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    height: 48,
    width: '64%',
    borderRadius: 18,
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

export default exerciseDetailStyles;
