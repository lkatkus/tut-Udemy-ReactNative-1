import React from 'react';
import {
  ActivityIndicator,
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
import { colors } from '../../constants';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

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
            onPress={async () => {
              if (!formState.isValid) {
                Alert.alert(
                  'Wrong input!',
                  'Please check the errors in the form.',
                  [{ text: 'Okay' }]
                );
                return;
              }

              setError(null);
              setIsLoading(true);

              try {
                if (currentProduct) {
                  await dispatch(
                    updateProduct(currentProduct.id, {
                      ...(currentProduct || {}),
                      ...formState.values,
                    })
                  );
                } else {
                  await dispatch(addProduct(formState.values));
                }

                navigation.goBack();
              } catch (e) {
                setError(e.message);
              }

              setIsLoading(false);
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, formState]);

  React.useEffect(() => {
    if (error) {
      Alert.alert(
        'An error occurred!',
        'Something went wrong trying to save your product',
        [{ text: 'Okay' }]
      );
    }
  }, [error]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' color={colors.secondary} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
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
              onChange={(value, isValid) =>
                handleTextChange('price')(Number(value), isValid)
              }
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditProduct;
