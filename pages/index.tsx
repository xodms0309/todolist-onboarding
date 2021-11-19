import type { NextPage } from 'next'
import TodoInput from '../components/TodoInput'
const Home: NextPage = () => {
  return (
    <header>
      <div>Todolist</div>
      <TodoInput />
      <button>Add Todo</button>
    </header>

  )
}

export default Home
