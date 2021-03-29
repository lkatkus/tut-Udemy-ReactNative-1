import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  },
  detailsContainer: {
    padding: 10,
  },
  detailsBlock: {
    marginBottom: 16,
  },
  blockTitle: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginBottom: 4,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const MealDetails = ({ meal }) => {
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />

      <View style={styles.detailsContainer}>
        <View style={{ ...styles.detailsBlock, ...styles.summaryContainer }}>
          <Text>{meal.duration}m</Text>
          <Text>{meal.complexity.toUpperCase()}</Text>
          <Text>{meal.affordability.toUpperCase()}</Text>
        </View>

        <View style={styles.detailsBlock}>
          <Text style={styles.blockTitle}>Ingredients</Text>
          {meal.ingredients.map((ingredient, i) => (
            <Text key={i}>{ingredient}</Text>
          ))}
        </View>

        <View style={styles.detailsBlock}>
          <Text style={styles.blockTitle}>Steps</Text>
          {meal.steps.map((ingredient, i) => (
            <Text key={i}>
              {i + 1}. {ingredient}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetails;
