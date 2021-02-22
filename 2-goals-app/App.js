import React from 'react';

import { AppContainer } from './src/containers';
import { GoalInput, GoalList, GoalItem } from './src/components';

const App = () => {
  const [goals, setGoals] = React.useState([]);

  return (
    <AppContainer>
      <GoalInput
        handleAddGoal={(newGoal) =>
          setGoals((currentGoals) => [
            ...currentGoals,
            { key: String(Math.random()), value: newGoal },
          ])
        }
      />
      <GoalList goals={goals} itemComponent={GoalItem} />
    </AppContainer>
  );
};

export default App;
