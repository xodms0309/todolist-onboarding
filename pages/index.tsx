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
          <li key={item.id}>
            {item.todo}
          </li>
          )
        })
      }
    </ul> 
  </>
  )
}
export default Home
