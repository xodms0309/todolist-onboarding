import type { NextPage } from 'next'
import { useState } from 'react';
import {v1} from 'uuid';
interface ITodoItem {
  id: string
  todo: string
}
const Home: NextPage = () => {
  const [todo, setTodo]=useState('');
  const [todolist, setTodoList]=useState<ITodoItem[]>([]);
  const onHandleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTodo(e.target.value);
  }
  const addTodo = () => {
    const item:ITodoItem={
      id:v1(),
      todo:todo,
    }
    if (todo) {
      setTodoList([...todolist, item])
    }
    setTodo('');
  }
  const deleteTodo=(id:string)=>{
    const newTodolist=todolist.filter((todo)=>todo.id!==id);
    setTodoList(newTodolist);
  }
  return (
  <>
    <header>
      <div>Todolist</div>
      <input 
        placeholder='todo 입력하기'
        value={todo}
        onChange={onHandleInputChange}
      />
      <button onClick={()=>addTodo()}>Add Todo</button>
    </header>
    <ul>     
      {
        todolist.map((item)=>{
          return(
            <div key={item.id}>
              <li>
                {item.todo}
              </li>
              <button onClick={()=>deleteTodo(item.id)}>Delete Todo</button>
            </div>
          )
        })
      }
    </ul> 
  </>
  )
}
export default Home
