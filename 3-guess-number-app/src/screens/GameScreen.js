import React from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ScreenContainer } from './../containers';
import { Button, Card, Title, BodyText } from './../components';

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '100%',
  },
  valueLabel: {
    fontSize: 40,
    marginTop: 16,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    marginTop: 16,
  },
});

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);

  if (randomNumber === exclude) {
    return generateRandom(min, max, exclude);
  }

  return randomNumber;
};

const showError = () => {
  Alert.alert('Are you sure?', "Please don't lie.", [{ text: 'Sorry!' }]);
};

const GameScreen = ({
  min = 1,
  max = 100,
  selectedValue,
  handleGameFinished,
}) => {
  const currentMin = React.useRef(min);
  const currentMax = React.useRef(max);
  const [currentGuess, setCurrentGuess] = React.useState(
    generateRandom(min, max, selectedValue)
  );
  const [guesses, setGuesses] = React.useState([]);

  const handleLower = () => {
    if (selectedValue < currentGuess) {
      currentMax.current = currentGuess;

      setGuesses((g) => [...g, currentGuess]);
      setCurrentGuess(
        generateRandom(currentMin.current, currentGuess, currentGuess)
      );
    } else {
      showError();
    }
  };

  const handleHigher = () => {
    if (selectedValue > currentGuess) {
      currentMin.current = currentGuess;

      setGuesses((g) => [...g, currentGuess]);
      setCurrentGuess(
        generateRandom(currentGuess, currentMax.current, currentGuess)
      );
    } else {
      showError();
    }
  };

  React.useEffect(() => {
    if (currentGuess === selectedValue) {
      handleGameFinished([...guesses, currentGuess]);
    }
  }, [currentGuess]);

  return (
    <ScreenContainer>
      <Title>Opponent's Guess</Title>

      <Card style={styles.card}>
        <BodyText style={styles.valueLabel}>{currentGuess}</BodyText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title={<Ionicons size={24} name='md-remove' />}
              onPress={handleLower}
            />
          </View>
          <View style={styles.button}>
            <Button
              title={<Ionicons size={24} name='md-add' />}
              onPress={handleHigher}
            />
          </View>
        </View>
      </Card>
    </ScreenContainer>
  );
};

export default GameScreen;
