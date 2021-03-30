import React from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';

import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
  );
};

export default App;
