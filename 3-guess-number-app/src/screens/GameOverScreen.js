import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { ScreenContainer } from './../containers';
import { Button, Title, BodyText } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 32,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: 'black',
    marginVertical: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultsContainer: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
  resultsText: {
    textAlign: 'center',
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

const GameOverScreen = ({ selectedValue, totalGuesses, handleNewGame }) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Title>The Game is Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./../../assets/success.png')}
            // source={{ uri: 'https://peakvisor.com/img/news/french-mountains.jpg' }}
          />
        </View>
        <View style={styles.resultsContainer}>
          <BodyText style={styles.resultsText}>
            Your phone needed{' '}
            <BodyText style={styles.highlight}>{totalGuesses.length}</BodyText>{' '}
            rounds to guess the number{' '}
            <BodyText style={styles.highlight}>{selectedValue}</BodyText>
          </BodyText>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='New game'
            color={colors.primary}
            onPress={handleNewGame}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default GameOverScreen;
