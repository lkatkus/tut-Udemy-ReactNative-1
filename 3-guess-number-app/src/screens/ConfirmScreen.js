import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from './../containers';
import { Card } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  valueLabel: {
    fontSize: 40,
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

const ConfirmScreen = ({ value, handleConfirmValue, handleResetValue }) => (
  <ScreenContainer>
    <Text style={styles.title}>Are you sure?</Text>
    <Card style={styles.cardContainer}>
      <Text style={styles.valueLabel}>{value}</Text>
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
            title='Cancel'
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
