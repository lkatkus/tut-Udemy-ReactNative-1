import React from 'react';

import { Header } from './src/components';
import { AppContainer } from './src/containers';
import { StartGameScreen } from './src/screens';

const App = () => {
  return (
    <AppContainer>
      <Header title='Guess a number' />
      <StartGameScreen />
    </AppContainer>
  );
};

export default App;
