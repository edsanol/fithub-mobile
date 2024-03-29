import {View, Text, TextInput, useWindowDimensions} from 'react-native';
import {BackgoundComponent, GradientButton} from '../../../components';
import MaskedView from '@react-native-masked-view/masked-view';
import loginStyles from '../login/style';
import LinearGradient from 'react-native-linear-gradient';
import {StackScreenProps} from '@react-navigation/stack';
import {RootOnboardingStackParamList} from '../../../navigation/OnboardingStackNavigation';
import useTextInputState from '../../../hooks/useTextInputState';
import LoginViewModel from './ViewModel';

interface OnboardingProps
  extends StackScreenProps<RootOnboardingStackParamList, 'password'> {}

const PasswordScreen = ({navigation, route}: OnboardingProps) => {
  const {width} = useWindowDimensions();
  const {textInputOpen} = useTextInputState();
  const {login, handlePassword, handleError, password, error} =
    LoginViewModel();

  const handleNext = async () => {
    await login(route.params.email, password);
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
            Ingresa la contraseña asociada a tu cuenta
          </Text>
        </View>
        <View
          style={{
            ...loginStyles.inputContainer,
            flex: textInputOpen ? 0.7 : 0.3,
          }}>
          <Text style={loginStyles.errorText}>{error}</Text>
          <TextInput
            style={{...loginStyles.input, width: width * 0.8}}
            placeholder="Contraseña"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={true}
            value={password}
            onChangeText={handlePassword}
          />
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

export default PasswordScreen;
