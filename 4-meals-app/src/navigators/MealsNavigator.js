import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailsScreen,
  FavoritesScreen,
} from '../screens';
import { HeaderButton } from '../components';
import colors from '../constants/colors';

const Stack = createStackNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const MealsTab = () => (
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
      options={(props) => ({
        title: 'Categories',
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='Menu'
              iconName='ios-menu'
              onPress={props.navigation.toggleDrawer}
            />
          </HeaderButtons>
        ),
      })}
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

const FavoritesTab = () => (
  <Stack.Navigator
    initialRouteName='Favorites'
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    }}
  >
    <Stack.Screen
      name='Favorites'
      component={FavoritesScreen}
      options={(props) => ({
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='Menu'
              iconName='ios-menu'
              onPress={props.navigation.toggleDrawer}
            />
          </HeaderButtons>
        ),
      })}
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

const MealsNavigator = () => (
  <Tab.Navigator shifting={true} activeColor='white'>
    <Tab.Screen
      name='Meals'
      component={MealsTab}
      options={{
        tabBarColor: colors.primary,
        tabBarIcon: (props) => (
          <Ionicons
            size={24}
            color={props.color}
            name={props.focused ? 'ios-restaurant' : 'ios-restaurant-outline'}
          />
        ),
      }}
    />
    <Tab.Screen
      name='Favorites'
      component={FavoritesTab}
      options={{
        tabBarColor: colors.secondary,
        tabBarIcon: (props) => (
          <Ionicons
            size={24}
            color={props.color}
            name={props.focused ? 'ios-star' : 'ios-star-outline'}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MealsNavigator;
