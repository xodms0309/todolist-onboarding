import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { RootState } from ".";
import { ITodoItem } from "../pages";
//GET
const GET_TODO = "GET_TODO";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAIL = "GET_TODO_FAIL";

//POST
const POST_TODO = "POST_TODO";
const POST_TODO_SUCCESS = "POST_TODO_SUCCESS";
const POST_TODO_FAIL = "POST_TODO_FAIL";

//DELETE
const DEL_TODO = "DEL_TODO";
const DEL_TODO_SUCCESS = "DEL_TODO_SUCCESS";
export const DEL_TODO_FAIL = "DEL_TODO_FAIL";

//EDIT
export const EDIT_TODO = "EDIT_TODO";
const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
const EDIT_TODO_FAIL = "EDIT_TODO_FAIL";

const COMPLETE_TODO = "COMPLETE_TODO";
const COMPLETE_TODO_SUCCESS = "COMPLETE_TODO_SUCCESS";
const COMPLETE_TODO_FAIL = "COMPLETE_TODO_FAIL";

export const getTodo = createAsyncAction(
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL
)<unknown, ITodoItem, AxiosError>();

export const postTodo = createAsyncAction(
  POST_TODO,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL
)<unknown, ITodoItem, AxiosError>();

export const delTodo = createAsyncAction(
  DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAIL
)<unknown, number, AxiosError>();

export const editTodo = createAsyncAction(
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL
)<unknown, ITodoItem, AxiosError>();

export const completeTodo = createAsyncAction(
  COMPLETE_TODO,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAIL
)<unknown, number, AxiosError>();
