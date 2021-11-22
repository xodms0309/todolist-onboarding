import type { NextPage } from "next";
import { useState } from "react";
import { v1 } from "uuid";

import Todo from "../components/Todo";
export interface ITodoItem {
  id: string;
  content: string;
  isCompleted: boolean;
}
const Home: NextPage = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState<ITodoItem[]>([]);
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const item: ITodoItem = {
      id: v1(),
      content: todo,
      isCompleted: false,
    };
    if (todo) {
      setTodoList([...todolist, item]);
    }
    setTodo("");
  };
  return (
    <>
      <header>
        <div>Todolist</div>
        <input
          placeholder="todo 입력하기"
          value={todo}
          onChange={onHandleInputChange}
        />
        <button onClick={() => addTodo()}>Add Todo</button>
      </header>
      <ul>
        {todolist.map((item) => {
          return (
            <Todo
              key={item.id}
              item={item}
              todolist={todolist}
              setTodoList={setTodoList}
            />
          );
        })}
      </ul>
    </>
  );
};
export default Home;
