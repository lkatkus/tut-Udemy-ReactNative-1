import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { selectors } from '../store/places';

const PlaceDetailScreen = (props) => {
  const placeId = props.route.params.placeId;
  const currentPlace = useSelector(selectors.getPlaceById(placeId));

  return (
    <View>
      <Text>{JSON.stringify(currentPlace)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlaceDetailScreen;
