import 'react-native-gesture-handler';

import React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MealsNavigator, FiltersNavigator } from './src/navigators';

const Drawer = createDrawerNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);

  if (!assetsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAssetsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Meals'>
        <Drawer.Screen name='Meals' component={MealsNavigator} />
        <Drawer.Screen name='Filter' component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
