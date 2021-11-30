import { getTodo, postTodo, delTodo, editTodo, completeTodo } from "./actions";
import createAsyncThunk from "../utils/createAsyncThunk";
import {
  requestCompleteTodo,
  requestDeleteTodo,
  requestEditTodo,
  requestGetTodo,
  requestPostTodo,
} from "./api";
export const getTodoThunk = createAsyncThunk(getTodo, requestGetTodo);
export const postTodoThunk = createAsyncThunk(postTodo, requestPostTodo);
export const delTodoThunk = createAsyncThunk(delTodo, requestDeleteTodo);
export const editTodoThunk = createAsyncThunk(editTodo, requestEditTodo);
export const completeTodoThunk = createAsyncThunk(
  completeTodo,
  requestCompleteTodo
);
