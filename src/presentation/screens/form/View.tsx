import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {BackgoundComponent} from '../../components';
import {SvgXml} from 'react-native-svg';
import {FitHub} from '../../assets/svg/iconSVG';
import CustomTextInput from './components/CustomTextInput';
import formStyles from './style';
import useTextInputState from '../../hooks/useTextInputState';
import FormViewModel from './ViewModel';
import LoadingScreen from '../Loading';

const FormScreen = () => {
  const {textInputOpen} = useTextInputState();
  const {width} = useWindowDimensions();
  const {
    inputs,
    errors,
    inputsInformation,
    loading,
    handleInputChange,
    handleSave,
  } = FormViewModel();

  if (loading) {
    return (
      <>
        <LoadingScreen show={false} />
      </>
    );
  }

  return (
    <BackgoundComponent>
      <View style={formStyles.mainContainer}>
        <View style={formStyles.header}>
          <View style={{justifyContent: 'space-evenly'}}></View>
          <SvgXml xml={FitHub} width={60} height={20} />
        </View>
        {!textInputOpen || width > 385 ? (
          <View style={{height: '18%', width: '100%'}}>
            <Text style={formStyles.titleText}>Registra Tus Medidas</Text>
            <Text style={formStyles.subtitleText}>
              Manten tu registro al día para que no pierdas tu progreso.
            </Text>
          </View>
        ) : null}
        <View
          style={{
            ...formStyles.textInputContainer,
            maxHeight: !textInputOpen ? '48%' : '62%',
            minHeight: !textInputOpen ? '48%' : '62%',
          }}>
          <ScrollView
            style={{height: '100%'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingBottom: 10,
              justifyContent: 'space-between',
            }}>
            {inputsInformation.map(({name, placeholder, label}) => (
              <CustomTextInput
                key={name}
                placeholder={placeholder}
                value={inputs[name]}
                onChangeText={(value: string) => handleInputChange(name, value)}
                error={errors[name]}
                label={label}
              />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            ...formStyles.buttonContainer,
            height: !textInputOpen || width > 385 ? '16%' : '24%',
            top: !textInputOpen || width > 385 ? 0 : 6,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={formStyles.button}
            onPress={handleSave}>
            <Text style={formStyles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default FormScreen;
