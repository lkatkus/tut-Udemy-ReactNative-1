import React from 'react';
import { Button } from 'react-native';

import { AppContainer } from './src/containers';
import { GoalInput, GoalList, GoalItem } from './src/components';

const App = () => {
  const [goals, setGoals] = React.useState([]);
  const [showAdd, setShowAdd] = React.useState(false);

  return (
    <AppContainer>
      <GoalInput
        isVisible={showAdd}
        handleClose={() => setShowAdd(false)}
        handleAddGoal={(newGoal) => {
          setGoals((currentGoals) => [
            ...currentGoals,
            { key: String(Math.floor(Math.random() * 1000)), value: newGoal },
          ]);
        }}
      />
      <GoalList
        goals={goals}
        itemComponent={GoalItem}
        handleDeleteItem={(item) => {
          setGoals((currentGoals) =>
            currentGoals.filter((goal) => goal.key !== item.key)
          );
        }}
      />
      <Button title='Add new goal' onPress={() => setShowAdd(true)} />
    </AppContainer>
  );
};

export default App;
