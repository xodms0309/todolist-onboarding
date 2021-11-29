import axios from "axios";
import { ThunkAction } from "redux-thunk";
import {
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  POST_TODO,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
  DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAIL,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  COMPLETE_TODO,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAIL,
} from "./actions";
import { RootState } from ".";
import {
  ICompleteTodoType,
  IDeleteTodoType,
  IEditTodoType,
  IGetTodoType,
  IPostTodoType,
} from "./types";

export const getTodoThunk =
  (): ThunkAction<void, RootState, null, IGetTodoType> => async (dispatch) => {
    dispatch({ type: GET_TODO });
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      const todos = res.data;
      dispatch({ type: GET_TODO_SUCCESS, todos });
    } catch (e) {
      dispatch({ type: GET_TODO_FAIL, error: e });
    }
  };

export const postTodoThunk =
  (todo: string): ThunkAction<void, RootState, null, IPostTodoType> =>
  async (dispatch) => {
    dispatch({ type: POST_TODO });
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      const todos = res.data;
      dispatch({ type: POST_TODO_SUCCESS, todos });
    } catch (e) {
      dispatch({ type: POST_TODO_FAIL, error: e });
    }
  };

export const delTodoThunk =
  (id: number): ThunkAction<void, RootState, null, IDeleteTodoType> =>
  async (dispatch) => {
    dispatch({ type: DEL_TODO });
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        data: { id: id },
      });
      dispatch({ type: DEL_TODO_SUCCESS, id });
    } catch (e) {
      dispatch({ type: DEL_TODO_FAIL, error: e });
    }
  };

export const editTodoThunk =
  (
    id: number,
    todo: string
  ): ThunkAction<void, RootState, null, IEditTodoType> =>
  async (dispatch) => {
    dispatch({ type: EDIT_TODO });
    try {
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          id: id,
          title: todo,
        }
      );
      const todos = res.data;
      dispatch({ type: EDIT_TODO_SUCCESS, todos });
    } catch (e) {
      dispatch({ type: EDIT_TODO_FAIL, error: e });
    }
  };

export const completeTodoThunk =
  (id: number): ThunkAction<void, RootState, null, ICompleteTodoType> =>
  async (dispatch) => {
    dispatch({ type: COMPLETE_TODO });
    try {
      await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        id: id,
      });
      dispatch({ type: COMPLETE_TODO_SUCCESS, id });
    } catch (e) {
      dispatch({ type: COMPLETE_TODO_FAIL, error: e });
    }
  };
