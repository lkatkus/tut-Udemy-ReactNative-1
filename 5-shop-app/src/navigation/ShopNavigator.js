import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProductsOverviewScreen } from '../screens';
import { colors } from '../constants';

const Stack = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='ProductsOverviewScreen'
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
        }}
      />
    </Stack.Navigator>
  );
};
