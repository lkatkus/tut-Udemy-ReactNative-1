import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';

const styles = StyleSheet.create({});

const CategoryMealsScreen = ({ navigation, route }) => {
  return (
    <ScreenContainer>
      <Text>CategoryMealsScreen</Text>
      <Button
        title='Pasta'
        onPress={() => navigation.navigate('MealDetails', { name: 'Pasta' })}
      />
    </ScreenContainer>
  );
};

export default CategoryMealsScreen;
