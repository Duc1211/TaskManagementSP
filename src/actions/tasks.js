import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  UPDATE_STATUS,
  CLOSE_FORM,
  TOGGLE_FORM,
  EDIT_FORM,
  A_TO_Z,
  Z_TO_A
} from "../constants/ActionTypes";

export const addTask = (task, status) => {
  return {
    type: ADD_TASK,
    task: task,
    status: status
  };
};

export const deleteTask = taskId => {
  return {
    type: DELETE_TASK,
    id: taskId
  };
};

export const editTask = task => {
  return {
    type: EDIT_TASK,
    task: task
  };
};

export const updateStatus = taskId => {
  return {
    type: UPDATE_STATUS,
    id: taskId
  };
};

export const toggleForm = () => {
  return {
    type: TOGGLE_FORM
  };
};

export const closeForm = () => {
  return {
    type: CLOSE_FORM
  };
};

export const editForm = () => {
  return {
    type: EDIT_FORM
  };
};

export const aToZ = () => {
  return {
    type: A_TO_Z
  };
};

export const zToA = () => {
  return {
    type: Z_TO_A
  };
};
