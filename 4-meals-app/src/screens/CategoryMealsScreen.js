import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';
import { MealList } from '../components';
import { MEALS } from '../data/mock-meals';

const styles = StyleSheet.create({});

const CategoryMealsScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <ScreenContainer>
      <MealList
        availableMeals={displayedMeals}
        handleNavigateRecipe={(item) => {
          navigation.navigate('MealDetails', {
            name: item.title,
            mealId: item.id,
          });
        }}
      />
    </ScreenContainer>
  );
};

export default CategoryMealsScreen;
