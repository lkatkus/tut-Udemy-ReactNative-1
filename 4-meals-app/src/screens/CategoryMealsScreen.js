import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';
import { MealCard } from '../components';
import { CATEGORIES, MEALS } from '../data/mock-meals';

const styles = StyleSheet.create({});

const CategoryMealsScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  return (
    <ScreenContainer>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => (
          <MealCard
            {...item}
            handleNavigateRecipe={() => {
              navigation.navigate('MealDetails', {
                name: item.title,
                mealId: item.id,
              });
            }}
          />
        )}
      />
    </ScreenContainer>
  );
};

export default CategoryMealsScreen;
