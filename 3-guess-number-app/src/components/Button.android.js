import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import colors from './../constants/colors';

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 64,
    overflow: 'hidden',
  },
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
  let ButtonContainer = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonContainer = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonWrapper}>
      <ButtonContainer onPress={onPress} activeOpacity={0.6}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{title}</Text>
        </View>
      </ButtonContainer>
    </View>
  );
};

export default Button;
