import React from 'react';
import { Alert } from 'react-native';

import { Header } from './src/components';
import { AppContainer } from './src/containers';
import { GameScreen, StartGameScreen, ConfirmScreen } from './src/screens';

const App = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [valueConfirmed, setConfirmedValue] = React.useState(false);

  return (
    <AppContainer>
      <Header title='Guess a number' />
      {selectedValue !== '' && valueConfirmed ? (
        <GameScreen value={selectedValue} />
      ) : selectedValue !== '' ? (
        <ConfirmScreen
          value={selectedValue}
          handleConfirmValue={() => {
            setConfirmedValue(true);
          }}
          handleResetValue={() => {
            setSelectedValue('');
          }}
        />
      ) : (
        <StartGameScreen
          handleValueSelect={(value, handleClear) => {
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
          }}
        />
      )}
    </AppContainer>
  );
};

export default App;
