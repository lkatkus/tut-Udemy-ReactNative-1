import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { selectors } from '../store/places';
import { PlaceItem } from '../components';

const PlacesListScreen = (props) => {
  const places = useSelector(selectors.getPlaces);

  return (
    <View>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <PlaceItem
            onSelect={() =>
              props.navigation.navigate('PlaceDetailScreen', {
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
