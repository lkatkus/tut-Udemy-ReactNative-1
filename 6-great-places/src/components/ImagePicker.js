import React from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import * as ExpoPermissions from 'expo-permissions';

import { Colors } from '../constants';

const verifyPermissions = async () => {
  const result = await ExpoPermissions.askAsync(ExpoPermissions.CAMERA);

  if (result.status !== 'granted') {
    Alert.alert(
      'Insufficient permissions',
      'You need to grant camera permissions',
      [{ text: 'Okay' }]
    );

    return false;
  }

  return true;
};

const ImagePicker = ({ field }) => {
  const { value, onChange } = field;

  const takeImageHandler = async () => {
    const hasCameraPermissions = await verifyPermissions();

    if (!hasCameraPermissions) {
      return;
    }

    const image = await ExpoImagePicker.launchCameraAsync();

    if (image.cancelled === false) {
      onChange(image.uri);
    }
  };

  return (
    <View style={styles.imagePicker}>
      {value ? (
        <View style={styles.imagePreviewContainer}>
          <Image style={styles.imagePreview} source={{ uri: value }} />
        </View>
      ) : (
        <Button
          title='Take Image'
          color={Colors.primary}
          onPress={takeImageHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreviewContainer: {
    width: 100,
    height: 100,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
  },
});

export default ImagePicker;
