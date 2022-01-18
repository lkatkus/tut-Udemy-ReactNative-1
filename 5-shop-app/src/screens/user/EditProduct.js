import React from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { HeaderButton, Input } from '../../components';
import { addProduct, updateProduct } from '../../store/products';

const FORM_VALUE_UPDATE = 'FORM_VALUE_UPDATE';

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_VALUE_UPDATE:
      let updatedIsValid = true;
      const updatedValues = {
        ...state.values,
        [action.input]: action.value,
      };
      const updatedValidities = {
        ...state.validities,
        [action.input]: action.isValid,
      };

      for (const key in updatedValidities) {
        updatedIsValid = updatedIsValid && updatedValidities[key];
      }

      return {
        values: updatedValues,
        validities: updatedValidities,
        isValid: updatedIsValid,
      };
    default:
      return state;
  }
};

const EditProduct = ({ route, navigation }) => {
  const currentProduct = route?.params?.product;

  const dispatch = useDispatch();
  const [formState, formDispatch] = React.useReducer(formReducer, {
    values: {
      title: currentProduct?.title || '',
      imageUrl: currentProduct?.imageUrl || '',
      description: currentProduct?.description || '',
      price: '',
    },
    validities: {
      title: currentProduct ? true : false,
      imageUrl: currentProduct ? true : false,
      description: currentProduct ? true : false,
      price: currentProduct ? true : false,
    },
    isValid: currentProduct ? true : false,
  });

  const handleTextChange = React.useCallback(
    (input) => (value, isValid) => {
      formDispatch({
        type: FORM_VALUE_UPDATE,
        input,
        value,
        isValid,
      });
    },
    [formDispatch]
  );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Add'
            iconName={
              Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'
            }
            onPress={() => {
              if (!formState.isValid) {
                Alert.alert(
                  'Wrong input!',
                  'Please check the errors in the form.',
                  [{ text: 'Okay' }]
                );
                return;
              }

              if (currentProduct) {
                dispatch(
                  updateProduct(currentProduct.id, {
                    ...(currentProduct || {}),
                    ...formState.values,
                  })
                );
              } else {
                dispatch(addProduct(formState.values));
              }

              navigation.goBack();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, formState]);

  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={20}>
      <ScrollView>
        <View style={styles.form}>
          <Input
            label='Title'
            onChange={handleTextChange('title')}
            autoCorrect
            autoCapitalize='sentences'
            errorText='Please enter a valid title!'
            initialValue={currentProduct?.title || ''}
            initialIsValid={currentProduct ? true : false}
          />

          <Input
            label='Image URL'
            onChange={handleTextChange('imageUrl')}
            required
            errorText='Please enter a valid image url!'
            initialValue={currentProduct?.imageUrl || ''}
            initialIsValid={currentProduct ? true : false}
          />

          {!currentProduct && (
            <Input
              label='Price'
              onChange={handleTextChange('price')}
              keyboardType='decimal-pad'
              required
              min={0}
              errorText='Please enter a valid price!'
              initialValue={currentProduct?.price || ''}
              initialIsValid={currentProduct ? true : false}
            />
          )}

          <Input
            label='Description'
            onChange={handleTextChange('description')}
            multiline
            numberOfLines={3}
            required
            errorText='Please enter a valid description!'
            initialValue={currentProduct?.description || ''}
            initialIsValid={currentProduct ? true : false}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
});

export default EditProduct;
