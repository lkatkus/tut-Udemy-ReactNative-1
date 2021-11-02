import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ field, title, placeholder }) => {
  const { name, value, onChange } = field;

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{title}</Text>
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
  inputLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  inputComponent: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TextInputComponent;
