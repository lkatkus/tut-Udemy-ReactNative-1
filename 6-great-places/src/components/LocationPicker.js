import React from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import * as ExpoLocation from 'expo-location';
import * as ExpoPermissions from 'expo-permissions';

import { Colors } from '../constants';

const verifyPermissions = async () => {
  const result = await ExpoPermissions.askAsync(
    ExpoPermissions.LOCATION_FOREGROUND,
    ExpoPermissions.LOCATION_BACKGROUND
  );

  if (!result.granted) {
    Alert.alert(
      'Insufficient permissions',
      'You need to grant camera permissions',
      [{ text: 'Okay' }]
    );

    return false;
  }

  return true;
};

const LocationPicker = () => {
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    try {
      const location = await ExpoLocation.getCurrentPositionAsync();

      console.log(location);
    } catch (err) {
      Alert.alert('Could not fetch location!', 'Please try again later', [
        { text: 'Okay' },
      ]);
    }
  };

  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        <Text>No location chosen yet!</Text>
      </View>
      <Button
        title='Get user location'
        color={Colors.primary}
        onPress={getLocationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {},
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default LocationPicker;
