import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
export type TAction = ActionType<typeof actions>;
export interface IGetTodoType {
  type:
    | typeof actions.getTodo.request
    | typeof actions.getTodo.success
    | typeof actions.getTodo.failure;
}
export interface IPostTodoType {
  type:
    | typeof actions.postTodo.request
    | typeof actions.postTodo.success
    | typeof actions.postTodo.failure;
}
export interface IDeleteTodoType {
  type:
    | typeof actions.delTodo.request
    | typeof actions.delTodo.success
    | typeof actions.delTodo.failure;
}
export interface IEditTodoType {
  type:
    | typeof actions.editTodo.request
    | typeof actions.editTodo.success
    | typeof actions.editTodo.failure;
}
export interface ICompleteTodoType {
  type:
    | typeof actions.completeTodo.request
    | typeof actions.completeTodo.success
    | typeof actions.completeTodo.failure;
}
