import React from 'react';
import { Button, View, ScrollView, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, Field, FieldArray } from 'formik';

import { SCREENS } from '../navigation/PlacesNavigatorScreens';
import { actions } from '../store/places';
import { Colors } from '../constants';
import { TextInput, ImagePicker, MultiItemPicker } from '../components';

const NewPlaceScreen = (props) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', images: [] }}
      onSubmit={(values) => {
        dispatch(actions.addPlace(values));
        props.navigation.navigate(SCREENS.PlacesListScreen);
      }}
    >
      {({ handleSubmit }) => (
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
          <Button
            title='Save Place'
            color={Colors.primary}
            onPress={handleSubmit}
          />
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 24,
  },
});

export default NewPlaceScreen;
