import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: 8,
    width: '100%',
    marginVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

const Input = ({ style, handleOnChange, ...rest }) => {
  return (
    <TextInput
      {...rest}
      onChangeText={handleOnChange}
      style={{ ...styles.input, ...style }}
    />
  );
};

export default Input;
