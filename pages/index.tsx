import type { NextPage } from "next";
import { useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import Todo from "../components/Todo";
import { requestGetTodo, requestPostTodo } from "../modules/api";
export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}
const Home: NextPage = () => {
  const [todo, setTodo] = useState("");
  const queryClient = useQueryClient();
  const todolist: ITodoItem[] = useQuery("todos", requestGetTodo).data;
  const postTodo = useMutation(requestPostTodo, {
    onSuccess: (todo) => {
      todolist.push(todo);
    },
  });
  //console.log(todolist);
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const item: ITodoItem = {
      id: todolist.length + 1,
      title: todo,
      completed: false,
    };
    if (todo) {
      postTodo.mutate(item);
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
        {todolist &&
          todolist.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
      </ul>
    </>
  );
};
export default Home;
