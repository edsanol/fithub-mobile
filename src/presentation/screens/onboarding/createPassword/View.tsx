import {View, Text, TextInput, useWindowDimensions} from 'react-native';
import {BackgoundComponent, GradientButton} from '../../../components';
import loginStyles from '../login/style';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import useTextInputState from '../../../hooks/useTextInputState';
import RegisterViewModel from './ViewModel';
import {StackScreenProps} from '@react-navigation/stack';
import {RootOnboardingStackParamList} from '../../../navigation/OnboardingStackNavigation';

interface OnboardingProps
  extends StackScreenProps<RootOnboardingStackParamList, 'createPassword'> {}

const CreatePasswordScreen = ({route}: OnboardingProps) => {
  const {width} = useWindowDimensions();
  const {textInputOpen} = useTextInputState();
  const {
    register,
    handlePassword,
    handleError,
    handleConfirmPassword,
    password,
    error,
    confirmPassword,
  } = RegisterViewModel();

  const handleNext = async () => {
    try {
      if (password !== confirmPassword) {
        handleError('Las contraseñas no coinciden');
        throw new Error('Las contraseñas no coinciden');
      }

      await register(route.params.email, password);
      handleError('');
    } catch (error: unknown) {
      console.log('Error during handleNext:', error);
      if (error instanceof Error) {
        handleError(error.message);
      } else {
        handleError('Ocurrió un error desconocido');
      }
    }
  };

  return (
    <BackgoundComponent>
      <View style={loginStyles.mainContainer}>
        <View
          style={{
            ...loginStyles.titleContainer,
            flex: textInputOpen ? 0.2 : 0.4,
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
            Tienes una membresía activa, ahora crea una contraseña para tu
            cuenta
          </Text>
        </View>
        <View
          style={{
            ...loginStyles.inputContainer,
            flex: textInputOpen ? 0.5 : 0.3,
          }}>
          <Text style={loginStyles.errorText}>{error}</Text>
          <TextInput
            style={{...loginStyles.input, width: width * 0.8}}
            placeholder="Escribe una contraseña"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePassword}
          />
          <TextInput
            style={{...loginStyles.input, width: width * 0.8}}
            placeholder="Confirma tu contraseña"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={handleConfirmPassword}
          />
          <GradientButton title="Iniciar sesión" handleButton={handleNext} />
        </View>
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
              para unirte a la comunidad y disfrutar de una experiencia fitness
              completa
            </Text>
          </Text>
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default CreatePasswordScreen;
