import React from 'react';
import {SafeAreaView, KeyboardAvoidingView, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import backgroundStyle from './style';
import {useHeaderHeight} from '@react-navigation/elements';

interface BackgoundComponentProps {
  children: React.ReactNode;
  styles?: any;
}

const BackgoundComponent = ({children, styles}: BackgoundComponentProps) => {
  const headerHeight = useHeaderHeight();

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? headerHeight : 0}>
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
      </KeyboardAvoidingView>
    </>
  );
};

export default BackgoundComponent;
