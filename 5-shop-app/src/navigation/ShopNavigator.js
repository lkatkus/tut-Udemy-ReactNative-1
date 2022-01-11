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
  UserProductsScreen,
  EditProductScreen,
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
        name='EditProductScreen'
        component={EditProductScreen}
        options={({ route }) => ({
          title: route?.params?.product?.title || 'Add a Product',
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
        name={'Products'}
        component={ProductsNavigator}
        options={{
          title: 'Products',
          drawerIcon: () => (
            <Ionicons
              size={23}
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={'Orders'}
        component={OrdersScreen}
        options={(props) => ({
          title: 'Orders',
          drawerIcon: () => (
            <Ionicons
              size={23}
              name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            />
          ),
          headerTintColor:
            Platform.OS === 'android' ? 'white' : colors.secondary,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.secondary : '',
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
        name={'Admin'}
        component={UserProductsScreen}
        options={(props) => ({
          title: 'Your Products',
          drawerIcon: () => (
            <Ionicons
              size={23}
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
            />
          ),
          headerTintColor:
            Platform.OS === 'android' ? 'white' : colors.secondary,
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.secondary : '',
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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title='Add'
                iconName={
                  Platform.OS === 'android' ? 'md-create' : 'ios-create'
                }
                onPress={() => props.navigation.navigate('EditProductScreen')}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
