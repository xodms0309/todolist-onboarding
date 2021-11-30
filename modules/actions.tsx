import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { ITodoItem } from "../pages";
export const getTodo = createAsyncAction(
  "GET_TODO",
  "GET_TODO_SUCCESS",
  "GET_TODO_FAIL"
)<unknown, ITodoItem, AxiosError>();

export const postTodo = createAsyncAction(
  "POST_TODO",
  "POST_TODO_SUCCESS",
  "POST_TODO_FAIL"
)<unknown, ITodoItem, AxiosError>();

export const delTodo = createAsyncAction(
  "DEL_TODO",
  "DEL_TODO_SUCCESS",
  "DEL_TODO_FAIL"
)<unknown, number, AxiosError>();

export const editTodo = createAsyncAction(
  "EDIT_TODO",
  "EDIT_TODO_SUCCESS",
  "EDIT_TODO_FAIL"
)<unknown, ITodoItem, AxiosError>();

export const completeTodo = createAsyncAction(
  "COMPLETE_TODO",
  "COMPLETE_TODO_SUCCESS",
  "COMPLETE_TODO_FAIL"
)<unknown, number, AxiosError>();
