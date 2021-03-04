import React from 'react';
import { Button, View, Text, StyleSheet, Keyboard } from 'react-native';

import { ScreenContainer } from './../containers';
import { Card, Input } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 64,
    textAlign: 'center',
    fontSize: 32,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
  },
});

const StartGameScreen = ({ handleValueSelect }) => {
  const [enteredValue, setEnteredValue] = React.useState('');

  return (
    <ScreenContainer>
      <Text style={styles.title}>Start a New Game!</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
          value={enteredValue}
          handleOnChange={(newValue) => {
            setEnteredValue(newValue.replace(/[^0-9]/g, ''));
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Reset'
              color={colors.secondary}
              onPress={() => {
                Keyboard.dismiss();
                setEnteredValue('');
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Confirm'
              color={colors.primary}
              onPress={() => {
                Keyboard.dismiss();
                handleValueSelect(enteredValue, () => {
                  setEnteredValue('');
                });
              }}
            />
          </View>
        </View>
      </Card>
    </ScreenContainer>
  );
};

export default StartGameScreen;
