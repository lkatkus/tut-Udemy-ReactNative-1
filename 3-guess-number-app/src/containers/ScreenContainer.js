import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

const AppContainer = ({ children }) => {
  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
      <View style={styles.container}>{children}</View>
    // </TouchableWithoutFeedback>
  );
};

export default AppContainer;
