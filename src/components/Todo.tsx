import { type Todo as TodoType, type TodoId } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void
  onToggleComplete: ({ id, completed }: Pick <TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC <Props> = ({ id, title, completed, onRemoveTodo, onToggleComplete }) => {
  return (
    <div className="view">
      <input
      className="toggle"
      type="checkbox"
      checked={completed}
      onChange={(event) => { onToggleComplete({ id, completed: event.target.checked }) }}
      />
      <label>{title}</label>
      <button
        className='destroy'
        onClick={() => { onRemoveTodo(id) }}></button>
    </div>
  )
}
