import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';

import {
  ProductsOverviewScreen,
  ProductDetailsScreen,
  CartScreen,
} from '../screens';
import { colors } from '../constants';
import { HeaderButton } from '../components';

const Stack = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ProductsOverviewScreen'
        component={ProductsOverviewScreen}
        options={(props) => ({
          title: 'All Products',
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title='Cart'
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => props.navigation.navigate('CartScreen')}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name='ProductDetailsScreen'
        component={ProductDetailsScreen}
        options={({ route }) => ({
          title: route.params.product.title,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
        })}
      />
      <Stack.Screen
        name='CartScreen'
        component={CartScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
        })}
      />
    </Stack.Navigator>
  );
};
