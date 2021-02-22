import React from 'react';
import { Button, View, TextInput, StyleSheet, Keyboard } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonContainer: { width: '20%', alignItems: 'center' },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
});

const GoalInput = ({ handleAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Course goal'
        style={styles.input}
        value={enteredGoal}
        onChangeText={(value) => {
          setEnteredGoal(value);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Add'
          onPress={() => {
            Keyboard.dismiss();
            setEnteredGoal('');
            handleAddGoal(enteredGoal);
          }}
        />
      </View>
    </View>
  );
};

export default GoalInput;
