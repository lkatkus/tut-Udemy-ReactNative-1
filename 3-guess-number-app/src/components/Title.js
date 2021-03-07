import React from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: Dimensions.get('window').height > 600 ? 24 : 16,
    fontFamily: 'open-sans-bold',
    marginVertical: 16,
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;
