import React from 'react';
import { Checkbox, List,Button } from 'react-native-paper';
const Task = ({ task, onToggle,onPress }) => {
  return (
    <List.Item
      key={task.id}
      title={task.title}
      left={() => (
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={() => onToggle(task.id)}
        />
      )}
     right={() => (
        <Button
          mode="contained"
          onPress={() => onPress(task.id)}
        >
         Delete
        </Button>)}
    />
  );
};

export default Task;
