import React from 'react';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import {
  ProductsOverviewScreen,
  ProductDetailsScreen,
  CartScreen,
  OrdersScreen,
} from '../screens';
import { colors } from '../constants';
import { HeaderButton } from '../components';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='ProductsOverviewScreen'>
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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title='Menu'
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => props.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
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
        options={() => ({
          title: 'Your cart',
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

const ShopNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Shop'>
      <Drawer.Screen
        name={'Orders'}
        component={OrdersScreen}
        options={(props) => ({
          title: 'Your Orders',
          drawerIcon: () => (
            <Ionicons
              size={23}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            />
          ),
          headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : '',
          },
          headerShown: true,
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title='Menu'
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => props.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Drawer.Screen
        name={'Shop'}
        component={ProductsNavigator}
        options={{
          title: 'All Products',
          drawerIcon: () => (
            <Ionicons
              size={23}
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
