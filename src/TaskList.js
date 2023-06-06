import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask,deleteTask } from './actions';
import Task from './tasks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={handleToggleTask} onPress={handleDeleteTask} />
      ))}
    </>
  );
};

export default TaskList;
