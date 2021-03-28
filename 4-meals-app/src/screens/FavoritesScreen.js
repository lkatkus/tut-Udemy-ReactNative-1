import React from 'react';
import { StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';
import { MealList } from '../components';
import { MEALS } from '../data/mock-meals';

const styles = StyleSheet.create({});

const FavoritesScreen = ({ navigation }) => {
  const categoryId = 'c1';

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

export default FavoritesScreen;
