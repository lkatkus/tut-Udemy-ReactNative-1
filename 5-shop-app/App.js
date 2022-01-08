import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/store';
import { ProductsNavigator } from './src/navigation';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!fontLoaded) {
      fetchFonts().then(() => setFontLoaded(true));
    }
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ProductsNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
