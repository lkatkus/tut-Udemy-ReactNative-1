import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { PlacesNavigator } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <PlacesNavigator />
    </NavigationContainer>
  );
}
