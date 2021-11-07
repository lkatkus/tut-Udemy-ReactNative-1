import React from 'react';
import { Button, ScrollView, StyleSheet, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { SCREENS } from '../navigation/PlacesNavigatorScreens';
import { actions } from '../store/places';
import { Colors } from '../constants';
import {
  Field,
  FieldArray,
  TextInput,
  ImagePicker,
  LocationPicker,
  MultiItemPicker,
} from '../components';

const NewPlaceScreen = (props) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        images: [],
        location: { latitude: null, longitude: null },
      }}
      onSubmit={(values) => {
        dispatch(actions.addPlace(values));
        props.navigation.navigate(SCREENS.PlacesListScreen);
      }}
    >
      {({ values, handleSubmit, setValues }) => {
        return (
          <ScrollView style={styles.form}>
            <Field
              name='title'
              title='Title'
              placeholder='Title of the new place'
              component={TextInput}
            />
            <FieldArray
              name='images'
              title='Images'
              placeholder='Take a picture or pick an image'
              component={(props) => (
                <MultiItemPicker
                  {...props}
                  fieldComponent={Field}
                  itemComponent={ImagePicker}
                />
              )}
            />
            <Field
              name='location'
              title='Location'
              placeholder='Title of the new place'
              previewComponent={({ location }) => (
                <View>
                  <Text>{JSON.stringify(location)}</Text>
                </View>
              )}
              component={(props) => (
                <LocationPicker
                  {...props}
                  field={{
                    ...props.field,
                    onChange: (newLocation) => {
                      setValues({ ...values, location: newLocation });
                    },
                  }}
                />
              )}
            />
            <Button
              title='Save Place'
              color={Colors.primary}
              onPress={handleSubmit}
            />
          </ScrollView>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 24,
  },
});

export default NewPlaceScreen;
