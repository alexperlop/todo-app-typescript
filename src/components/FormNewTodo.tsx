import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  onAddTodo: (title: TodoTitle) => void
}

export const FormNewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChangeInput = (event): void => {
    setInputValue(event.target.value)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onAddTodo({ title: inputValue })
    setInputValue('')
  }
  return (
    <form action="" className='' onSubmit={handleSubmit}>
      <input type="text"
        value={inputValue}
        className='new-todo'
        onChange={handleChangeInput}
        placeholder='¿Qué quieres hacer?'
        autoFocus
      />
    </form>
  )
}
