import * as actions from "./actions";
import { ITodoItem } from "../pages";
import { AxiosError } from "axios";
export interface IGetTodoType {
  type:
    | typeof actions.GET_TODO
    | typeof actions.GET_TODO_SUCCESS
    | typeof actions.GET_TODO_FAIL;
}
export interface IPostTodoType {
  type:
    | typeof actions.POST_TODO
    | typeof actions.POST_TODO_SUCCESS
    | typeof actions.POST_TODO_FAIL;
}
export interface IDeleteTodoType {
  type:
    | typeof actions.DEL_TODO
    | typeof actions.DEL_TODO_SUCCESS
    | typeof actions.DEL_TODO_FAIL;
}
export interface IEditTodoType {
  type:
    | typeof actions.EDIT_TODO
    | typeof actions.EDIT_TODO_SUCCESS
    | typeof actions.EDIT_TODO_FAIL;
}
export interface ICompleteTodoType {
  type:
    | typeof actions.COMPLETE_TODO
    | typeof actions.COMPLETE_TODO_SUCCESS
    | typeof actions.COMPLETE_TODO_FAIL;
}

export interface IGetTodoAction {
  type: IGetTodoType;
  todos: ITodoItem;
  error: AxiosError;
}
export interface IPostTodoAction {
  type: IPostTodoType;
  todos: ITodoItem;
  error: AxiosError;
}
export interface IDeleteTodoAction {
  type: IDeleteTodoType;
  id: number;
  error: AxiosError;
}
export interface IEditTodoAction {
  type: IEditTodoType;
  todos: ITodoItem;
  error: AxiosError;
}
export interface ICompleteTodoAction {
  type: ICompleteTodoType;
  id: number;
  error: AxiosError;
}
export interface Action {
  action:
    | IGetTodoAction
    | IPostTodoAction
    | ICompleteTodoAction
    | IDeleteTodoAction
    | IEditTodoAction;
}
