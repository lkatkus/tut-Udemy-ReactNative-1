import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { SCREENS } from '../navigation/PlacesNavigatorScreens';
import { selectors, actions } from '../store/places';
import { PlaceItem } from '../components';

const PlacesListScreen = (props) => {
  const dispatch = useDispatch();
  const places = useSelector(selectors.getPlaces);

  React.useEffect(() => {
    dispatch(actions.loadPlaces());
  }, []);

  return (
    <View>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <PlaceItem
            onSelect={() =>
              props.navigation.navigate(SCREENS.PlaceDetailScreen, {
                placeId: item.id,
                placeTitle: item.title,
              })
            }
            {...item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
