import React from 'react';
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  Modal,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  button: {
    width: '45%',
  },
});

const GoalInput = ({ isVisible, handleAddGoal, handleClose }) => {
  const [enteredGoal, setEnteredGoal] = React.useState('');

  return (
    <Modal visible={isVisible} animationType='slide'>
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
          <View style={styles.button}>
            <Button
              title='Add'
              onPress={() => {
                Keyboard.dismiss();
                setEnteredGoal('');
                handleClose();
                handleAddGoal(enteredGoal);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button color='red' title='Close' onPress={handleClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
