import React from 'react';
import { Alert, View, StyleSheet, FlatList } from 'react-native';
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
  listContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 16,
  },
  list: {
    flexGrow: 1,
  },
  listItem: {
    marginVertical: 16,
    alignItems: 'center',
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

      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {guesses.map((guess, index) => (
            <View key={`${index}-${guess}`} style={styles.listItem}>
              <BodyText>
                #{index + 1} - {guess}
              </BodyText>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={guesses.map((guess, index) => ({
            key: `${index}-${guess}`,
            item: { round: index + 1, value: guess },
          }))}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            return (
              <View key={item.key} style={styles.listItem}>
                <BodyText>
                  #{item.item.round} - {item.item.value}
                </BodyText>
              </View>
            );
          }}
        />
      </View>
    </ScreenContainer>
  );
};

export default GameScreen;
