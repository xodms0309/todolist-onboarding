import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import Todo from "../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { getTodoThunk, postTodoThunk } from "../modules/thunks";
import { RootState } from "../modules";
import { requestGetTodo } from "../modules/api";
export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}
const Home: NextPage = () => {
  const [todo, setTodo] = useState("");
  const queryClient = useQueryClient();
  const todolist: ITodoItem[] = useQuery("todos", requestGetTodo).data;
  console.log(todolist);
  //const todolist = useSelector((state: RootState) => state.todo);
  //const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTodoThunk());
  // }, [dispatch]);
  const onHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const item: ITodoItem = {
      id: todolist.length + 1,
      title: todo,
      completed: false,
    };
    // if (todo) {
    //   dispatch(postTodoThunk(item));
    // }
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
