import React from 'react';
import { Button, View, FlatList, Text, StyleSheet } from 'react-native';

import { CategoryCard } from '../components';
import { ScreenContainer } from '../containers';
import { CATEGORIES } from '../data/mock-meals';

const styles = StyleSheet.create({});

const CategoriesScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            handleNavigateCategory={() =>
              navigation.navigate('CategoryMeals', {
                name: item.title,
                categoryId: item.id,
              })
            }
          />
        )}
      />
    </ScreenContainer>
  );
};

export default CategoriesScreen;
