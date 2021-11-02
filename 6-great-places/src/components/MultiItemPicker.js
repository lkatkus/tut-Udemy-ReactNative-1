import React from 'react';
import { View } from 'react-native';

const MultiImagePicker = ({
  name,
  push,
  form,
  fieldComponent: FieldComponent,
  itemComponent: ItemComponent,
}) => {
  const items = form.values[name];

  return (
    <View>
      {items.map((_, index) => (
        <FieldComponent
          key={index}
          name={`${name}.${index}`}
          component={ItemComponent}
        />
      ))}
      <ItemComponent field={{ onChange: push }} />
    </View>
  );
};

export default MultiImagePicker;
