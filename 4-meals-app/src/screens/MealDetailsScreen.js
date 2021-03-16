import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from '../containers';

const styles = StyleSheet.create({});

const MealDetailsScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>MealDetailsScreen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </ScreenContainer>
  );
};

export default MealDetailsScreen;
