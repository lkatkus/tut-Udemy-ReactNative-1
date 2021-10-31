import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {
  MapScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlacesListScreen,
} from '../screens';
import { HeaderButton } from '../components';
import { Colors } from '../constants';

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='PlacesListScreen'
      screenOptions={{
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        },
      }}
    >
      <Stack.Screen name='MapScreen' component={MapScreen} />
      <Stack.Screen name='NewPlaceScreen' component={NewPlaceScreen} />
      <Stack.Screen name='PlaceDetailScreen' component={PlaceDetailScreen} />
      <Stack.Screen
        name='PlacesListScreen'
        component={PlacesListScreen}
        options={(props) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title='Add Place'
                iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                onPress={() => props.navigation.navigate('NewPlaceScreen')}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;
