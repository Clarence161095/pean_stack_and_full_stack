const ADD = "ADD";
const DELETE = "DELETE";

let initState = {
  data: [],
};

const myReducer = (state = initState, action) => {
  switch (action?.type) {
    case ADD:
      return { ...state, data: action.payload };
    case DELETE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const dispatch = async (action) => {
  const response = await fetch("https://api.restful-api.dev/objects");
  const data = await response.json();
  return myReducer(initState, action);
};

const myAction = (data) =>
  console.log({
    type: ADD,
    payload: data,
  });

dispatch(myAction());