import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [text, setState] = React.useState('Very initial text');

  return (
    <View style={styles.container}>
      <Text>Initial text - {text}</Text>
      <Button title='Change Text' onPress={() => setState('Updated text')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
