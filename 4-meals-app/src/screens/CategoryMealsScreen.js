import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';
import { CATEGORIES } from '../data/mock-meals';

const styles = StyleSheet.create({});

const CategoryMealsScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;
  const selectedCategory = CATEGORIES.find(({ id }) => id === categoryId);

  return (
    <ScreenContainer>
      <Text>CategoryMealsScreen - {JSON.stringify(selectedCategory)}</Text>
      <Button
        title='Pasta'
        onPress={() => navigation.navigate('MealDetails', { name: 'Pasta' })}
      />
    </ScreenContainer>
  );
};

export default CategoryMealsScreen;
