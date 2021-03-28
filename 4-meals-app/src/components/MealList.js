import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import MealCard from './MealCard';

const styles = StyleSheet.create({});

const MealList = ({ availableMeals, handleNavigateRecipe }) => {
  return (
    <FlatList
      data={availableMeals}
      renderItem={({ item }) => (
        <MealCard
          {...item}
          handleNavigateRecipe={() => handleNavigateRecipe(item)}
        />
      )}
    />
  );
};

export default MealList;
