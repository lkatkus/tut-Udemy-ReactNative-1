import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { ScreenContainer } from '../containers';
import { FilterSwitch, HeaderButton } from '../components';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    margin: 16,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
  },
});

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = React.useState(false);
  const [isLactoseFree, setIsLactoseFree] = React.useState(false);
  const [isVegan, setIsVegan] = React.useState(false);
  const [isVegetarian, setIsVegetarian] = React.useState(false);

  const saveFilters = React.useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Save' iconName='ios-save' onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [navigation, saveFilters]);

  return (
    <ScreenContainer style={{ alignItems: 'center' }}>
      <Text style={styles.title}>Available Filter / Restrictions</Text>

      <FilterSwitch
        title='Gluten-free'
        isSelected={isGlutenFree}
        handleChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        title='Lactose-free'
        isSelected={isLactoseFree}
        handleChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        title='Vegan'
        isSelected={isVegan}
        handleChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        title='Vegetarian'
        isSelected={isVegetarian}
        handleChange={(newValue) => setIsVegetarian(newValue)}
      />
    </ScreenContainer>
  );
};

export default FiltersScreen;
