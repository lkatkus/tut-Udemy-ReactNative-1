import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    marginVertical: 16,
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
