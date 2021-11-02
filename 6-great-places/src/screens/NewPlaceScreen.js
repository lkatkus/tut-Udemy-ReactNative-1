import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik, Field } from 'formik';

import { Colors } from '../constants';
import { TextInput } from '../components';
import { actions } from '../store/places';

const NewPlaceScreen = (props) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values) => {
        dispatch(actions.addPlace(values));
        props.navigation.goBack();
      }}
    >
      {({ handleSubmit }) => (
        <ScrollView style={styles.form}>
          <Field
            name='name'
            title='Name'
            placeholder='Name of the new place'
            component={TextInput}
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
