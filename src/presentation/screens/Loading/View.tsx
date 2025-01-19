import {View} from 'react-native';
import {BackgoundComponent} from '../../components';
import {SvgXml} from 'react-native-svg';
import {FitHub} from '../../assets/svg/iconSVG';
import LottieView from 'lottie-react-native';
import React from 'react';

interface LoadingScreenProps {
  show?: boolean;
}

const LoadingScreen = ({show = true}: LoadingScreenProps) => {
  return (
    <BackgoundComponent>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {show ? (
          <>
            <SvgXml xml={FitHub} height={60} width={180} style={{top: 20}} />
            <LottieView
              source={require('../../assets/lottie/Loading-lottie.json')}
              style={{width: 200, height: 200}}
              autoPlay
              loop
              speed={2}
            />
          </>
        ) : (
          <>
            <LottieView
              source={require('../../assets/lottie/Loading-lottie.json')}
              style={{width: 200, height: 200, bottom: 20}}
              autoPlay
              loop
              speed={2}
            />
          </>
        )}
      </View>
    </BackgoundComponent>
  );
};

export default LoadingScreen;
