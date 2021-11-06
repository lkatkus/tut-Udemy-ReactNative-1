import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ field, title, placeholder }) => {
  const { name, value, onChange } = field;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.inputComponent}
        onChangeText={onChange(name)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
  inputComponent: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TextInputComponent;
