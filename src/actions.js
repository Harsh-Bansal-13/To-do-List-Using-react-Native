import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('ADD_TASK');
export const deleteTask = createAction('DELETE_TASK');
export const toggleTask = createAction('TOGGLE_TASK');

  