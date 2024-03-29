import {View, Text, useWindowDimensions, TextInput} from 'react-native';
import {BackgoundComponent, GradientButton} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import loginStyles from './style';
import {RootOnboardingStackParamList} from '../../../navigation/OnboardingStackNavigation';
import {StackScreenProps} from '@react-navigation/stack';
import useTextInputState from '../../../hooks/useTextInputState';
import LoginViewModel from './ViewModel';

interface OnboardingProps
  extends StackScreenProps<RootOnboardingStackParamList, 'login'> {}

const LoginScreen = ({navigation}: OnboardingProps) => {
  const {width} = useWindowDimensions();
  const {textInputOpen} = useTextInputState();
  const {login, handleEmail, handleError, email, error} = LoginViewModel();

  const handleNext = async () => {
    try {
      const response = await login(email);

      if (response === 0) {
        handleError('No tienes una membresía activa con FitHub Connect');
      } else if (response === 1) {
        handleError('');
        navigation.navigate('password', {email});
      } else if (response === 2) {
        navigation.navigate('createPassword', {email});
      } else {
        throw new Error('Error de autenticación');
      }
    } catch (error) {
      console.log('Error during handleNext:', error);
      handleError('Error de autenticación');
    }
  };

  return (
    <BackgoundComponent>
      <View style={loginStyles.mainContainer}>
        <View
          style={{
            ...loginStyles.titleContainer,
            flex: textInputOpen ? 0.3 : 0.4,
          }}>
          <MaskedView
            maskElement={
              <Text style={loginStyles.title}>¡FitHub Connect!</Text>
            }>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#40B6A6', '#849395', '#BD5AA2']}>
              <Text style={loginStyles.titleText}>¡FitHub Connect!</Text>
            </LinearGradient>
          </MaskedView>
          <Text style={loginStyles.descriptionText}>
            Para acceder poder acceder, debes tener una membresía activa con un
            gimnasio asociado a FitHub Connect.
          </Text>
        </View>
        <View
          style={{
            ...loginStyles.inputContainer,
            flex: textInputOpen ? 0.7 : 0.3,
          }}>
          <>
            <Text style={loginStyles.errorText}>{error}</Text>
            <TextInput
              style={{...loginStyles.input, width: width * 0.8}}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              placeholderTextColor={'#A0A0A0'}
              value={email}
              onChangeText={handleEmail}
            />
          </>
          <GradientButton title="Iniciar sesión" handleButton={handleNext} />
        </View>
        {!textInputOpen && (
          <View style={loginStyles.footerContainer}>
            <Text style={loginStyles.footerText}>
              <Text style={loginStyles.footerTextBold}>
                ¿No tienes una membresía activa?{' '}
              </Text>
              <Text>Visita </Text>
              <Text style={loginStyles.footerTextLink}>
                www.fithubconnect.com/partners{' '}
              </Text>
              <Text>
                para unirte a la comunidad y disfrutar de una experiencia
                fitness completa
              </Text>
            </Text>
          </View>
        )}
      </View>
    </BackgoundComponent>
  );
};

export default LoginScreen;
