import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
});

const AppContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppContainer;
