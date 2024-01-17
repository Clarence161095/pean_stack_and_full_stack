import { useContext } from "react";
import { StoreContext } from "../../../../contexts/StoreContext";
import { loadAction } from "./action";
import selector from "./selector";

export default function useFacade() {
  const { state } = selector(useContext(StoreContext));
  const { dispatch } = selector(useContext(StoreContext));

  return {
    getData: () => state,
    loadData: () => dispatch(loadAction),
    isLoading: state?.loading,
    list: state?.list,
    error: state?.error
  }
}


