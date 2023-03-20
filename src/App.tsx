import { useState } from 'react'
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'
import { TODO_FILTERS } from './const'
import { Footer } from './components/Footer'

const todoMocks = [
  {
    id: '1',
    title: 'Aprender React + TypeScript',
    completed: true
  },
  {
    id: '2',
    title: 'Aprender React + NextJS',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(todoMocks)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick <TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false
    }
    const newTodos = [...todos, newTodo]

    setTodos(newTodos)
  }
  const title = 'todos'
  const imgUrl = 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png'
  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  return (
  <div className='todoapp'>
    <Header
      image={imgUrl}
      title={title}
      onAddTodo={handleAddTodo}
    />
    <Todos
      todos={filteredTodos}
      onRemoveTodo={handleRemove}
      onToggleComplete= {handleCompleted}
    />
    <Footer
      activeCount={activeCount}
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={handleRemoveAllCompleted}
      handleFilterChange={handleFilterChange}
    />
  </div>
  )
}

export default App
