import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { getTodo, postTodo, delTodo, editTodo, completeTodo } from "./actions";
import { RootState } from ".";
import {
  ICompleteTodoType,
  IDeleteTodoType,
  IEditTodoType,
  IGetTodoType,
  IPostTodoType,
} from "./types";
import { ITodoItem } from "../pages";

export const getTodoThunk =
  (): ThunkAction<void, RootState, null, IGetTodoType> => async (dispatch) => {
    dispatch({ type: getTodo.request });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const todos = res.data;
      console.log(res);
      dispatch({ type: getTodo.success, payload: todos });
    } catch (e) {
      dispatch({ type: getTodo.failure, error: e });
    }
  };

export const postTodoThunk =
  (todo: ITodoItem): ThunkAction<void, RootState, null, IPostTodoType> =>
  async (dispatch) => {
    dispatch({ type: postTodo.request });
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      const todos = res.data;
      dispatch({ type: postTodo.success, payload: todos });
    } catch (e) {
      dispatch({ type: postTodo.failure, error: e });
    }
  };

export const delTodoThunk =
  (id: number): ThunkAction<void, RootState, null, IDeleteTodoType> =>
  async (dispatch) => {
    dispatch({ type: delTodo.request });
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        data: { id: id },
      });
      dispatch({ type: delTodo.success, payload: id });
    } catch (e) {
      dispatch({ type: delTodo.failure, error: e });
    }
  };

export const editTodoThunk =
  (
    id: number,
    todo: string
  ): ThunkAction<void, RootState, null, IEditTodoType> =>
  async (dispatch) => {
    dispatch({ type: editTodo.request });
    try {
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          id: id,
          title: todo,
        }
      );
      const todos = res.data;
      dispatch({ type: editTodo.success, payload: todos });
    } catch (e) {
      dispatch({ type: editTodo.failure, error: e });
    }
  };

export const completeTodoThunk =
  (id: number): ThunkAction<void, RootState, null, ICompleteTodoType> =>
  async (dispatch) => {
    dispatch({ type: completeTodo.request });
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        id: id,
      });
      dispatch({ type: completeTodo.success, payload: id });
    } catch (e) {
      dispatch({ type: completeTodo.failure, error: e });
    }
  };
