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

const Input = ({ style, ...rest }) => {
  return <TextInput {...rest} style={{ ...styles.input, ...style }} />;
};

export default Input;
