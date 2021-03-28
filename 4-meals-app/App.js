import 'react-native-gesture-handler';

import React from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailsScreen,
  FavoritesScreen,
  FiltersScreen,
} from './src/screens';
import { HeaderButton } from './src/components';
import colors from './src/constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

const MealsNavigator = () => (
  <Stack.Navigator
    initialRouteName='CategoriesScreen'
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.primary,
      },
    }}
  >
    <Stack.Screen
      name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'Categories',
      }}
    />
    <Stack.Screen
      name='CategoryMeals'
      component={CategoryMealsScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
    <Stack.Screen
      name='MealDetails'
      component={MealDetailsScreen}
      options={({ route }) => ({
        title: route.params.name,
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='Favorite'
              iconName='ios-star'
              onPress={() => alert('Mark as favorite')}
            />
          </HeaderButtons>
        ),
      })}
    />
  </Stack.Navigator>
);

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
      <Tab.Navigator>
        <Tab.Screen name='Meals' component={MealsNavigator} />
        <Tab.Screen name='Favorites' component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
