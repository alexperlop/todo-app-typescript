import { type TodoTitle } from '../types'
import { FormNewTodo } from './FormNewTodo'

interface Props {
  title: string
  image: string
  onAddTodo: (title: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ title, image, onAddTodo }) => {
  return (
  <header className="header">
    <h1>{title}</h1>
    <figure>
      <img
      src={image}
      alt="typescript"
      style={{ width: '60px', height: 'auto' }}
      />
    </figure>
    <FormNewTodo
    onAddTodo={onAddTodo}/>
  </header>)
}
