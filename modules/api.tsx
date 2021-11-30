import axios from "axios";
import { ITodoItem } from "../pages";
export const requestGetTodo = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  const todos = res.data;
  return todos;
};

export const requestPostTodo = async (todo: ITodoItem) => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    todo
  );
  const todos = res.data;
  return todos;
};

export const requestDeleteTodo = async (id: number) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    data: { id: id },
  });
  return id;
};

export const requestEditTodo = async (id: number, todo: string) => {
  const res = await axios.patch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      id: id,
      title: todo,
    }
  );
  const todos = res.data;
  return todos;
};

export const requestCompleteTodo = async (id: number) => {
  await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    id: id,
  });
  return id;
};
