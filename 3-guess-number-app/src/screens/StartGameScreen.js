import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Keyboard,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import { ScreenContainer } from './../containers';
import { Card, Input, Title, BodyText } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
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
    // width: 100,
    width: Dimensions.get('window').width / 4,
  },
});

const StartGameScreen = ({ handleValueSelect }) => {
  const [enteredValue, setEnteredValue] = React.useState('');
  const [buttonWidth, setButtonWidth] = React.useState(
    Dimensions.get('window').width / 4
  );

  React.useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
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
              <View style={{ ...styles.button, width: buttonWidth }}>
                <Button
                  title='Reset'
                  color={colors.secondary}
                  onPress={() => {
                    Keyboard.dismiss();
                    setEnteredValue('');
                  }}
                />
              </View>
              <View style={{ ...styles.button, width: buttonWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
