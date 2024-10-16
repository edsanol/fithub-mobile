import {View, Text, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {BackButton, FitHub} from '../../assets/svg/iconSVG';

interface HeaderWithBackButtonProps {
  navigation: any;
  styles?: any;
}

const HeaderWithBackButton = ({
  navigation,
  styles,
}: HeaderWithBackButtonProps) => {
  return (
    <View
      accessible={true}
      style={{
        height: '8%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        ...styles,
      }}>
      <TouchableOpacity
        accessibilityLabel="Botón para regresar al menú principal"
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
      <View>
        <SvgXml xml={FitHub} width={60} height={20} />
      </View>
    </View>
  );
};

export default HeaderWithBackButton;
