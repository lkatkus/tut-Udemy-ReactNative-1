import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  label,
  errorText,
  initialValue,
  initialIsValid,
  onChange,
  ...props
}) => {
  const [inputState, dispatch] = React.useReducer(inputReducer, {
    value: initialValue,
    isValid: initialIsValid,
    isTouched: false,
  });

  const handleTextChange = (text) => {
    let isValid = true;

    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !EMAIL_REGEX.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }

    dispatch({ type: INPUT_CHANGE, value: text, isValid });
  };

  const handleBlur = () => {
    dispatch({ type: INPUT_BLUR });
  };

  React.useEffect(() => {
    if (inputState.isTouched) {
      onChange(inputState.value, inputState.isValid);
    }
  }, [inputState]);

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={handleTextChange}
        onBlur={handleBlur}
      />
      {!inputState.isValid && inputState.isTouched && <Text>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Input;
