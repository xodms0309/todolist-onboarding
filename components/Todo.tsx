import { useState } from "react";
import indexStyles from "../styles/index.module.css";
import { ITodoItem } from "../pages";
interface ITodo {
  item: ITodoItem;
  todolist: ITodoItem[];
  setTodoList: any;
}
export default function Todo({ item, todolist, setTodoList }: ITodo) {
  const [newTodo, setNewTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const deleteTodo = (id: string) => {
    const newTodolist = todolist.filter((todo) => todo.id !== id);
    setTodoList(newTodolist);
  };
  const completeTodo = (id: string) => {
    const newTodoList = todolist.map((todo) => ({
      ...todo,
      isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
    }));
    setTodoList(newTodoList);
  };
  const onEditTodoClick = () => {
    setEdit(!edit);
  };
  const editTodo = (id: string) => {
    const newTodoList = todolist.map((item) => ({
      ...item,
      content: item.id === id ? newTodo : item.content,
    }));
    if (newTodo) {
      setTodoList(newTodoList);
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
        <li className={item.isCompleted ? indexStyles.completed : ""}>
          {item.content}
        </li>
      )}
      <button onClick={() => deleteTodo(item.id)}>Delete Todo</button>
      {edit ? (
        <button onClick={() => editTodo(item.id)}>Edit</button>
      ) : (
        <button onClick={() => onEditTodoClick()}>Edit Todo</button>
      )}
      <button onClick={() => completeTodo(item.id)}>Completed</button>
    </div>
  );
}
