import React from 'react';
import { Button, View, StyleSheet, Dimensions } from 'react-native';

import { ScreenContainer } from './../containers';
import { Card, Title, BodyText } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  valueLabel: {
    fontSize: Dimensions.get('window').height > 600 ? 24 : 16,
    marginTop: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%',
    marginTop: 16,
  },
});

const ConfirmScreen = ({
  selectedValue,
  handleConfirmValue,
  handleResetValue,
}) => (
  <ScreenContainer>
    <Title>Are you sure?</Title>

    <Card style={styles.cardContainer}>
      <BodyText style={styles.valueLabel}>{selectedValue}</BodyText>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='Start game'
            color={colors.primary}
            onPress={() => {
              handleConfirmValue();
            }}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Try again'
            color={colors.secondary}
            onPress={() => {
              handleResetValue();
            }}
          />
        </View>
      </View>
    </Card>
  </ScreenContainer>
);

export default ConfirmScreen;
