import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
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

const AppContainer = ({ children, style }) => {
  return (
    // <TouchableWithoutFeedback
    //   onPress={() => {
    //     Keyboard.dismiss();
    //   }}
    // >
    <View style={{ ...styles.container, ...style }}>{children}</View>
    // </TouchableWithoutFeedback>
  );
};

export default AppContainer;
