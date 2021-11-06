import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Field as FormikField, FieldArray as FormikFieldArray } from 'formik';

const FieldArray = ({ title, ...props }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text>{title}</Text>
      <FormikFieldArray {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldArrayContainer: {
    paddingVertical: 8,
  },
});

export default FieldArray;
