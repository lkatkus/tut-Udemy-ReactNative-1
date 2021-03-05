import React from 'react';
import { Button, View, Text, StyleSheet, Keyboard } from 'react-native';

import { ScreenContainer } from './../containers';
import { Card, Input, Title, BodyText } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
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
      <Title>Start a New Game!</Title>

      <Card style={styles.inputContainer}>
        <BodyText>Select a Number</BodyText>
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
