import {Platform, StatusBar, StyleSheet} from 'react-native';

const backgroundStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#100E1D',
  },
  linearGradient: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default backgroundStyle;
