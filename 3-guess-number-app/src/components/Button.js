import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from './../constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
