import 'react-native-gesture-handler';

import React from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailsScreen,
  FavoritesScreen,
  FiltersScreen,
} from './src/screens';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = () => {
  const [assetsLoaded, setAssetsLoaded] = React.useState(false);

  if (assetsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setAssetsLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='CategoriesScreen'>
        <Stack.Screen
          name='Categories'
          component={CategoriesScreen}
          options={{ title: 'Categories' }}
        />
        <Stack.Screen
          name='CategoryMeals'
          component={CategoryMealsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name='MealDetails'
          component={MealDetailsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
