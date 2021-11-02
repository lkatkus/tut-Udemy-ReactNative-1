import React from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';

import { Colors } from '../constants';
import { TextInput } from '../components';

const NewPlaceScreen = () => {
  return (
    <Formik
      initialValues={{ placeName: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <ScrollView style={styles.form}>
          <Field
            name='placeName'
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
