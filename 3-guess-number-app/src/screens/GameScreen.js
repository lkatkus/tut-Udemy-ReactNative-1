import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { ScreenContainer } from './../containers';

const GameScreen = ({ value }) => {
  return (
    <ScreenContainer>
      <Text>{value}</Text>
    </ScreenContainer>
  );
};

export default GameScreen;
