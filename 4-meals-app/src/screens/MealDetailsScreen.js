import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';

const styles = StyleSheet.create({});

const MealDetailsScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId;

  return (
    <ScreenContainer>
      <Text>MealDetailsScreen {mealId}</Text>
    </ScreenContainer>
  );
};

export default MealDetailsScreen;
