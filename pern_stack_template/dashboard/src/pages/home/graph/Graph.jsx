import { useSelector, useDispatch } from 'react-redux'
import { decrement } from './+store/reducer.js'

export default function Graph() {
  // TODO: Use redux toolkit get data from back end and display it here
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  function button(title, onClick) {
    return <button
      className="flex justify-center items-center w-[20px] h-[20px] bg-slate-600 rounded-[50%]"
      aria-label="Increment value"
      onClick={onClick}
    >
      <span>{title}</span>
    </button>
  }

  return (
    <div className="flex">
      {button('-', () => dispatch(decrement()))}
      <span className="px-3">{count}</span>
      {button('+', () => dispatch({ type: 'graph/increment' }))}
    </div>
  )
}
