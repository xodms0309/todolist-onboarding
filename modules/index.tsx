import { combineReducers } from "redux";
import { todo } from "./reducer";
import { ITodoItem } from "../pages";
const rootReducer = combineReducers({ todo });

export default rootReducer;

export interface RootState {
  todo: ITodoItem;
}
