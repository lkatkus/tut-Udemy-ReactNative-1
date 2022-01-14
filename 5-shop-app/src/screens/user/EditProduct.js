import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { HeaderButton } from '../../components';
import { addProduct, updateProduct } from '../../store/products';

const EditProduct = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const currentProduct = route?.params?.product;

  const [title, setTitle] = React.useState(currentProduct?.title || '');
  const [imageUrl, setImageUrl] = React.useState(
    currentProduct?.imageUrl || ''
  );
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState(
    currentProduct?.description || ''
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
              if (currentProduct) {
                dispatch(
                  updateProduct(currentProduct.id, {
                    ...(currentProduct || {}),
                    title,
                    imageUrl,
                    price,
                    description,
                  })
                );
              } else {
                dispatch(
                  addProduct({
                    title,
                    imageUrl,
                    price,
                    description,
                  })
                );
              }

              navigation.goBack();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, title, imageUrl, price, description]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={setImageUrl}
          />
        </View>
        {!currentProduct && (
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={String(price)}
              onChangeText={(newPrice) => {
                if (!isNaN(newPrice)) {
                  setPrice(Number(newPrice));
                }
              }}
            />
          </View>
        )}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  inputWrapper: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#888',
    borderBottomWidth: 1,
  },
});

export default EditProduct;
