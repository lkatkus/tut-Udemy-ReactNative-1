import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

import { ScreenContainer } from './../containers';
import { Button, Title, BodyText } from './../components';
import colors from './../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: Dimensions.get('window').height > 600 ? 24 : 16,
  },
  imageContainer: {
    width: Dimensions.get('window').height > 600 ? 200 : 150,
    height: Dimensions.get('window').height > 600 ? 200 : 150,
    borderWidth: 3,
    borderRadius: 100,
    borderColor: 'black',
    marginVertical: Dimensions.get('window').height > 600 ? 24 : 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultsContainer: {
    marginVertical: Dimensions.get('window').height > 600 ? 16 : 8,
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
    <ScrollView>
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
              <BodyText style={styles.highlight}>
                {totalGuesses.length}
              </BodyText>{' '}
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
    </ScrollView>
  );
};

export default GameOverScreen;
