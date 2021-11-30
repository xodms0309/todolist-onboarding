import { ITodoItem } from "../pages";
import { createReducer } from "typesafe-actions";
import { getTodo, postTodo, delTodo, editTodo, completeTodo } from "./actions";
import { TAction } from "./types";
const initialTodo: ITodoItem[] = [
  {
    id: 0,
    title: "initial todo",
    completed: false,
  },
];
export const todo = createReducer<ITodoItem[], TAction>(initialTodo)
  .handleAction(getTodo.success, (state, action) =>
    state.concat(action.payload)
  )
  .handleAction(postTodo.success, (state, action) =>
    state.concat(action.payload)
  )
  .handleAction(delTodo.success, (state, action) =>
    state.filter((item) => item.id !== action.payload)
  )
  .handleAction(editTodo.success, (state, action) =>
    state.map((item) => ({
      ...item,
      title: item.id === action.payload.id ? action.payload.title : item.title,
    }))
  )
  .handleAction(completeTodo.success, (state, action) =>
    state.map((item) => ({
      ...item,
      completed: item.id === action.payload ? !item.completed : item.completed,
    }))
  );
