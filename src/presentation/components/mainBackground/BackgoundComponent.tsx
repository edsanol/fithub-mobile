import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import backgroundStyle from './style';

interface BackgoundComponentProps {
  children: React.ReactNode;
  styles?: any;
}

const BackgoundComponent = ({children, styles}: BackgoundComponentProps) => {
  return (
    <SafeAreaView style={backgroundStyle.mainContainer}>
      <LinearGradient
        colors={[
          'rgba(47, 7, 67, 0.4)',
          'rgba(86, 174, 165, 0)',
          'rgba(86, 174, 165, 0.1)',
        ]}
        style={{...backgroundStyle.linearGradient, ...styles}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        {children}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default BackgoundComponent;
