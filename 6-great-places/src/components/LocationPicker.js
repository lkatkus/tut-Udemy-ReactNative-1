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

const LocationPicker = ({ field, previewComponent: PreviewComponent }) => {
  const [isFetching, setIsFetching] = React.useState(false);
  const { value, onChange } = field;

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    setIsFetching(true);

    try {
      const location = await ExpoLocation.getCurrentPositionAsync();
      setIsFetching(false);

      const {
        coords: { latitude, longitude },
      } = location;

      onChange({ latitude, longitude });
    } catch (err) {
      setIsFetching(false);
      Alert.alert('Could not fetch location!', 'Please try again later', [
        { text: 'Okay' },
      ]);
    }
  };

  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        <Text>
          {isFetching ? (
            <ActivityIndicator size='large' color={Colors.primary} />
          ) : value ? (
            <PreviewComponent location={value} />
          ) : (
            'No location chosen yet!'
          )}
        </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationPicker;
