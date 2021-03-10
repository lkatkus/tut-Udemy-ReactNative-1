import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';

const styles = StyleSheet.create({});

const CategoriesScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>CategoriesScreen</Text>
      <Button
        title='Vegan'
        onPress={() =>
          navigation.navigate('CategoryMeals', { name: 'Vegan' })
        }
      />
    </ScreenContainer>
  );
};

export default CategoriesScreen;
