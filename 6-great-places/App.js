import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { PlacesNavigator } from './src/navigation';
import { store } from './src/store';
import { initDatabase } from './src/utils/db';

initDatabase()
  .then(() => {
    console.log('====================================');
    console.log('Database initialized');
    console.log('====================================');
  })
  .catch((err) => {
    console.log('====================================');
    console.log('Failed to initialized database', err);
    console.log('====================================');
  });

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlacesNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
