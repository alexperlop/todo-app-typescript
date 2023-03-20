import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  handleFilterChange,
  filterSelected
}) => {
  return (
    <footer className='footer'>
        <span className='todo-count'>
          <strong>{activeCount}</strong>Item Left
        </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button
          className='clear-completed'
          onClick={onClearCompleted}
        >Borrar Completadas</button>
      )}
    </footer>
  )
}
