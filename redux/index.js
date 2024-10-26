const useReducer = (callback, initData) => {
  let state = initData;

  const dispatch = (action) => {
    state = callback(state, action);
  };

  return [state, dispatch];
};

const initialState = {
  name: "Linh",
  age: 20,
};

const customReducerCallback = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add":
      return { ...state, age: state.age + payload.amount };
    case "remove":
      return { ...state, age: state.age - payload.amount };
    default:
      return state;
  }
};

export const DemoRedux = () => {
  const [state, dispatch] = useReducer(customReducerCallback, initialState);

  const handleClick = () => {
    dispatch({ type: "add", payload: { amount: 2 } });
  };

  const handleRemove = () => {
    dispatch({ type: "remove", payload: { amount: 3 } });
  };

  return (
    <>
      <div>{data.name}</div>
      <div>{data.age}</div>
      <button onClick={handleClick}>Add</button>
      <button onClick={handleRemove}>Substract</button>
    </>
  );
};
