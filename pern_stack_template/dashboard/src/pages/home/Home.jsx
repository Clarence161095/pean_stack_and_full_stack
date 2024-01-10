import { useReducer, useState } from "react";

// TODO: I want to save the value of age when I change page
// You can combine useReducer and useContext to save the value of age when you change page
function reducer(state, action) {
  switch (action.type) {
    case 'TANG_TUOI':
      return { age: state.age + 1 };
    case 'GIAM_TUOI':
      return { age: state.age - 1 };
    default:
      return state;
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { age: 18 });
  const [state2, setState2] = useState({ age: 18 });

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: 'GIAM_TUOI' })}>-</button>
        {state.age}
        <button onClick={() => dispatch({ type: 'TANG_TUOI' })}>+</button>
      </div>
      <div>
        <button onClick={() => setState2({ age: state2.age - 1 })}>-</button>
        {state2.age}
        <button onClick={() => setState2({ age: state2.age + 1 })}>+</button>
      </div>
    </>
  )
}
