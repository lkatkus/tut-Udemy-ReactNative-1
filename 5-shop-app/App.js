import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/store';
import { ProductsNavigator } from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
