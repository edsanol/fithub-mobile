import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BackgoundComponent} from '../../../components';
import {SvgXml} from 'react-native-svg';
import {FitHub} from '../../../assets/svg/iconSVG';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigation';
import ProfileStyle from './style';
import {useContext, useState} from 'react';
import {UserContext} from '../../../context/UserContext';
import LogoutModal from './components/LogoutModal';

interface ProfileProps
  extends StackScreenProps<ProfileStackParamList, 'Profile'> {}

const ProfileScreen = ({navigation}: ProfileProps) => {
  const {athlete, gym} = useContext(UserContext);
  const getInitialsToTwoLetters = (name: string, lastName: string) => {
    return `${name.charAt(0)}${lastName.charAt(0)}`;
  };
  const [status, setStatus] = useState(false);

  const handleModalStatus = (Value: boolean) => {
    setStatus(Value);
  };

  return (
    <BackgoundComponent>
      <View style={{flex: 1}}>
        <View style={ProfileStyle.header}>
          <View style={{justifyContent: 'space-evenly'}} />
          <View style={{right: 12}}>
            <SvgXml xml={FitHub} width={60} height={20} />
          </View>
        </View>
        <View style={ProfileStyle.profileContainer}>
          <View style={ProfileStyle.imageContainer}>
            <Text style={ProfileStyle.imageText}>
              {getInitialsToTwoLetters(
                athlete?.athleteName!,
                athlete?.athleteLastName!,
              )}
            </Text>
          </View>
          <Text
            style={
              ProfileStyle.nameText
            }>{`${athlete?.athleteName} ${athlete?.athleteLastName}`}</Text>
          <Text style={ProfileStyle.subtitleText}>{gym?.gymName}.</Text>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="location-sharp"
              size={20}
              color="#6B7280"
              style={{top: 2, right: 4}}
            />
            <Text numberOfLines={2} style={ProfileStyle.subtitleText}>
              {gym?.address}
            </Text>
          </View>
        </View>
        <View style={{flex: 1, marginTop: 12}}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('EditProfile')}>
            <View style={ProfileStyle.profileItem}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="person-outline"
                  size={24}
                  color="#2A49FF"
                  style={{bottom: 2}}
                />
                <Text style={ProfileStyle.profileItemText}>Tu Perfil</Text>
              </View>
              <Icon name={'chevron-forward'} size={24} color={'#FFFFFF'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={ProfileStyle.profileItem}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="alert-circle-outline"
                  size={24}
                  color="#2A49FF"
                  style={{bottom: 2}}
                />
                <Text style={ProfileStyle.profileItemText}>
                  Terminos y Condiciones
                </Text>
              </View>
              <Icon name={'chevron-forward'} size={24} color={'#FFFFFF'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('DataTreatment')}>
            <View style={ProfileStyle.profileItem}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="clipboard-outline"
                  size={24}
                  color="#2A49FF"
                  style={{bottom: 2}}
                />
                <Text style={ProfileStyle.profileItemText}>
                  Tratamiento de Datos
                </Text>
              </View>
              <Icon name={'chevron-forward'} size={24} color={'#FFFFFF'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate('Contact')}>
            <View style={ProfileStyle.profileItem}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="headset-outline"
                  size={24}
                  color="#2A49FF"
                  style={{bottom: 2}}
                />
                <Text style={ProfileStyle.profileItemText}>Contacto</Text>
              </View>
              <Icon name={'chevron-forward'} size={24} color={'#FFFFFF'} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleModalStatus(true)}>
            <View style={ProfileStyle.profileItem}>
              <View style={{flexDirection: 'row'}}>
                <Icon
                  name="exit-outline"
                  size={24}
                  color="#2A49FF"
                  style={{bottom: 2}}
                />
                <Text style={ProfileStyle.profileItemText}>Cerrar Sesión</Text>
              </View>
              <Icon name={'chevron-forward'} size={24} color={'#FFFFFF'} />
            </View>
          </TouchableOpacity>
        </View>

        {status && <LogoutModal handleModalStatus={handleModalStatus} />}
      </View>
    </BackgoundComponent>
  );
};

export default ProfileScreen;
