import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {ProfileStackParamList} from '../../../navigation/ProfileStackNavigation';
import {
  BackgoundComponent,
  HeaderWithBackButton,
  SelectDropdown,
} from '../../../components';
import CustomFormInput from './components/CustomFormInput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import EditProfileViewModel from './ViewModel';
import moment from 'moment';

interface EditProfileProps
  extends StackScreenProps<ProfileStackParamList, 'EditProfile'> {}

const EditProfileScreen = ({navigation}: EditProfileProps) => {
  const {
    isDatePickerVisible,
    inputsInformation,
    inputs,
    masterData,
    athlete,
    canSave,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    handleInputChange,
    handleSelectChange,
    handleEditAthlete,
  } = EditProfileViewModel();

  return (
    <BackgoundComponent>
      <View style={{flex: 1, marginHorizontal: 16}}>
        <HeaderWithBackButton navigation={navigation} styles={{height: '6%'}} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Editar Perfil
        </Text>
        <View
          style={{
            maxHeight: '62%',
            minHeight: '62%',
            width: '100%',
            marginTop: 12,
          }}>
          <ScrollView
            style={{height: '100%'}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 60,
            }}>
            {inputsInformation.map(
              ({name, placeholder, label, keyboardType, editable}) => (
                <CustomFormInput
                  key={name}
                  placeholder={placeholder}
                  name={label}
                  value={inputs[name]}
                  onChangeText={(value: string) =>
                    handleInputChange(name, value)
                  }
                  keyboardType={keyboardType}
                  editable={editable}
                />
              ),
            )}
            <View style={{width: '100%', marginVertical: 4}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 11,
                  marginBottom: 2,
                  paddingLeft: 18,
                }}>
                Fecha de nacimiento
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: '96%',
                  height: 50,
                  backgroundColor: '#1F222A',
                  borderRadius: 18,
                  paddingLeft: 20,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                onPress={showDatePicker}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '400',
                    color: inputs.birthDate ? '#FFFFFF' : '#6B7280',
                  }}>
                  {moment(inputs.birthDate).format('DD/MM/YYYY').toString() ||
                    'DD/MM/AAAA'}
                </Text>
              </TouchableOpacity>
            </View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 8,
              }}>
              <SelectDropdown
                name={'Genero'}
                masterData={masterData}
                handleSelectChange={handleSelectChange}
                initialSelected={athlete?.genre || ''}
              />
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            maxHeight: '14%',
            minHeight: '14%',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={canSave ? 0.7 : 1}
            style={{
              height: 48,
              width: '64%',
              borderRadius: 18,
              backgroundColor: canSave ? '#2A49FF' : '#6B7280',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() => {
              if (canSave) {
                handleEditAthlete();
              }
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#FFFFFF',
                textAlign: 'center',
              }}>
              Actualizar Perfil
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgoundComponent>
  );
};

export default EditProfileScreen;
