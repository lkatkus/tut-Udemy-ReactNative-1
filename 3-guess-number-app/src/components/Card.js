import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 16,
    // IOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    // Android
    elevation: 8,
  },
});

const Card = ({ children, style: passedStyle }) => (
  <View style={{ ...styles.container, ...passedStyle }}>{children}</View>
);

export default Card;
