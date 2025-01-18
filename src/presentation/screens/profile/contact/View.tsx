import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {BackgoundComponent} from '../../../components';
import ContactViewModel from './ViewModel';
import Accordion from '../../../components/accordeon/Accordion';
import {SvgXml} from 'react-native-svg';
import {BackButton, FitHub} from '../../../assets/svg/iconSVG';
import {StackScreenProps} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigation';
import LoadingScreen from '../../Loading';
import React from 'react';

interface ContactProps
  extends StackScreenProps<ProfileStackParamList, 'Contact'> {}

const ContactScreen = ({navigation}: ContactProps) => {
  const {contact, loading} = ContactViewModel();

  if (loading) {
    return (
      <>
        <LoadingScreen show={false} />
      </>
    );
  }

  return (
    <BackgoundComponent>
      <View style={{flex: 1, marginHorizontal: 16}} accessible={true}>
        <View
          style={{
            height: '6%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            accessibilityLabel="Botón para regresar al menú de perfil"
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}>
            <View
              style={{
                width: 54,
                height: 54,
                borderRadius: 27,
                borderWidth: 1,
                borderColor: '#6B7280',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SvgXml
                xml={BackButton}
                height={20}
                color={'#FFFFFF'}
                style={{right: 2}}
              />
            </View>
          </TouchableOpacity>
          <View style={{right: 12}}>
            <SvgXml xml={FitHub} width={60} height={20} />
          </View>
        </View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: '#FFFFFF',
            textAlign: 'center',
            marginBottom: 12,
          }}>
          Contacto
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}>
          {contact.map((item, index) => {
            return <Accordion key={index} value={item} />;
          })}
        </ScrollView>
      </View>
    </BackgoundComponent>
  );
};

export default ContactScreen;

const ContactStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
