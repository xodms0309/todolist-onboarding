import { useState } from "react";
import indexStyles from "../styles/index.module.css";
import { ITodoItem } from "../pages/index";
import { useDispatch } from "react-redux";
import {
  delTodoThunk,
  completeTodoThunk,
  editTodoThunk,
} from "../modules/thunks";

interface ITodo {
  item: ITodoItem;
}

export default function Todo({ item }: ITodo) {
  const { id, title, completed } = item;
  const [newTodo, setNewTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const deleteTodo = (id: number) => {
    dispatch(delTodoThunk(id));
  };
  const completeTodo = (id: number) => {
    dispatch(completeTodoThunk(id));
  };
  const onEditTodoClick = () => {
    setEdit(!edit);
  };
  const editTodo = (id: number) => {
    if (newTodo) {
      dispatch(editTodoThunk(id, newTodo));
    }
    setNewTodo("");
    setEdit(!edit);
  };
  return (
    <div>
      {edit ? (
        <input
          placeholder="todo 입력하기"
          value={newTodo}
          onChange={onHandleInputChange}
        />
      ) : (
        <li className={completed ? indexStyles.completed : ""}>{title}</li>
      )}
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
      {edit ? (
        <button onClick={() => editTodo(id)}>Edit</button>
      ) : (
        <button onClick={() => onEditTodoClick()}>Edit Todo</button>
      )}
      <button onClick={() => completeTodo(id)}>Completed</button>
    </div>
  );
}
