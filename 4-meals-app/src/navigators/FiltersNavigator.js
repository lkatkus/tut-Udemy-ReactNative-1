import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { FiltersScreen } from '../screens';
import { HeaderButton } from '../components';
import colors from '../constants/colors';

const Stack = createStackNavigator();

const FiltersNavigator = () => (
  <Stack.Navigator
    initialRouteName='Filters'
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: colors.secondary,
      },
    }}
  >
    <Stack.Screen
      name='Filters'
      component={FiltersScreen}
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
  </Stack.Navigator>
);

export default FiltersNavigator;
