import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';
import { MealDetails } from '../components';
import { MEALS } from '../data/mock-meals';

const styles = StyleSheet.create({});

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScreenContainer>
      <MealDetails meal={selectedMeal} />
    </ScreenContainer>
  );
};

export default MealDetailsScreen;
