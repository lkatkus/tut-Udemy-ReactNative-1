import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Header } from './src/components';
import { AppContainer } from './src/containers';
import {
  GameScreen,
  GameOverScreen,
  StartGameScreen,
  ConfirmScreen,
} from './src/screens';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [valueConfirmed, setConfirmedValue] = React.useState(false);
  const [totalGuesses, setTotalGuesses] = React.useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const handleStartGame = () => {
    setConfirmedValue(true);
  };

  const handleSetGameValue = (value, handleClear) => {
    if (!isNaN(value) && value > 0 && value <= 99) {
      setSelectedValue(value);
    } else {
      Alert.alert(
        'Invalid number.',
        'It has to be a number between 1 and 99.',
        [
          {
            text: 'Ok',
            onPress: handleClear,
          },
        ]
      );
    }
  };

  const handleResetGameValue = () => {
    setSelectedValue('');
    setConfirmedValue(false);
    setTotalGuesses(undefined);
  };

  return (
    <AppContainer>
      <Header title='Guess a number' />

      {totalGuesses ? (
        <GameOverScreen
          selectedValue={selectedValue}
          totalGuesses={totalGuesses}
          handleNewGame={handleResetGameValue}
        />
      ) : selectedValue !== '' && valueConfirmed ? (
        <GameScreen
          selectedValue={Number(selectedValue)}
          handleGameFinished={(totalGuesses) => {
            setTotalGuesses(totalGuesses);
          }}
        />
      ) : selectedValue !== '' ? (
        <ConfirmScreen
          selectedValue={selectedValue}
          handleConfirmValue={handleStartGame}
          handleResetValue={handleResetGameValue}
        />
      ) : (
        <StartGameScreen handleValueSelect={handleSetGameValue} />
      )}
    </AppContainer>
  );
};

export default App;
