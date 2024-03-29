import {TextInput} from 'react-native';
import {View, Text} from 'react-native';

interface CustomFormInputProps {
  placeholder: string;
  name: string;
  value: any;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'number-pad' | 'email-address';
  editable?: boolean;
}

const CustomFormInput = ({
  placeholder,
  name,
  value,
  onChangeText,
  keyboardType,
  editable,
}: CustomFormInputProps) => {
  return (
    <View style={{width: '100%', marginVertical: 4}}>
      <Text
        style={{
          color: 'white',
          fontSize: 11,
          marginBottom: 2,
          paddingLeft: 18,
        }}>
        {name}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#6B7280"
        style={{
          width: '96%',
          height: 50,
          backgroundColor: '#1F222A',
          borderRadius: 18,
          paddingLeft: 20,
          fontSize: 13,
          fontWeight: '400',
          color: editable ? '#FFFFFF' : '#6B7280',
          alignSelf: 'center',
        }}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        readOnly={!editable}
      />
    </View>
  );
};

export default CustomFormInput;
