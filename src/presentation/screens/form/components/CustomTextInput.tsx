import {View} from 'react-native';
import {StyleSheet, Text, TextInput} from 'react-native';

interface CustomTextInputProps {
  placeholder: string;
  value: number | null;
  onChangeText?: (text: string) => void;
  error?: string;
  label: string;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  error,
  label,
}: CustomTextInputProps) => {
  return (
    <View style={{width: '48%', minHeight: 50, marginVertical: 8}}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        numberOfLines={1}
        placeholder={placeholder}
        maxFontSizeMultiplier={1}
        placeholderTextColor="#838995"
        style={styles.input}
        keyboardType="numeric"
        value={value ? value.toString() : ''}
        onChangeText={text => onChangeText && onChangeText(text)}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#1F222A',
    borderRadius: 18,
    paddingLeft: 20,
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
  },
  errorText: {
    color: '#FA0C00',
    fontSize: 10,
    width: '100%',
    paddingLeft: 4,
  },
  label: {
    color: 'white',
    fontSize: 11,
    marginBottom: 2,
    paddingLeft: 6,
  },
});
