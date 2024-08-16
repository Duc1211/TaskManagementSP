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
import uuid from "uuid/v4";

const tasksList = [
  { id: uuid(), task: "Đi làm", status: true },
  { id: uuid(), task: "Đi chơi", status: false },
  { id: uuid(), task: "Xem phim", status: true },
  { id: uuid(), task: "Đi ngủ", status: true }
];

export const initialState = {
  isEdit: false,
  isShow: false,
  tasks: JSON.parse(localStorage.getItem("tasks")) || tasksList
};

export default function tasksReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        isShow: false,
        tasks: [
          ...state.tasks,
          { id: uuid(), task: action.task, status: action.status }
        ]
      };

    case DELETE_TASK:
      return {
        ...state,
        isShow: false,
        isEdit: false,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };

    case EDIT_TASK:
      return {
        ...state,
        isShow: false,
        isEdit: false,
        tasks: state.tasks.map(task => {
          if (task.id === action.task.id) {
            return action.task;
          }
          return task;
        })
      };

    case A_TO_Z:
      let AZsortState = [...state.tasks];
      AZsortState.sort((a, b) => a.task.localeCompare(b.task));
      return {
        ...state,
        tasks: AZsortState
      };

    case Z_TO_A:
      let ZAsortState = [...state.tasks];
      ZAsortState.sort((a, b) => b.task.localeCompare(a.task));
      return {
        ...state,
        tasks: ZAsortState
      };

    case UPDATE_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.id) {
            return { ...task, status: !task.status };
          }
          return task;
        })
      };

    case TOGGLE_FORM:
      return { ...state, isShow: !state.isShow, isEdit: false };

    case CLOSE_FORM:
      return { ...state, isShow: false, isEdit: false };

    case EDIT_FORM:
      return { ...state, isShow: true, isEdit: true };

    default:
      return state;
  }
}
