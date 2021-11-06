import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Field as FormikField } from 'formik';

const Field = ({ title, ...props }) => {
  return (
    <View style={styles.fieldContainer}>
      {title && <Text>{title}</Text>}
      <FormikField {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    paddingVertical: 8,
  },
});

export default Field;
