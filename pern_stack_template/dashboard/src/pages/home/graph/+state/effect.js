import { getGraph, postGraph } from "../../../../services/GraphService";
import { loading, success } from "./action";

async function refreshData(dispatch) {
  dispatch(loading());
  try {
    const data = await getGraph();
    dispatch(success(data));
  } catch (error) {
    dispatch(error("Error while loading data"));
  }
}

export function get() {
  return refreshData;
}

export function create({ title }) {
  return async (dispatch) => {
    try {
      const newGraph = await postGraph({ title });
      if (newGraph.title === title) {
        dispatch(get())
      }
    } catch (error) {
      dispatch(error("Error while creating data"));
    }
  };
}
