import { useEffect, useReducer } from "react";
import AnnouncementService from "../../../../services/AnnouncementService";
import { errorAction, loadAction, loadedAction, loadingAction } from "./action";
import { announcementReducer } from "./reduce";
import { initialState } from "./state";

export default function useAnnouncementEffect(init = initialState) {
  const [state, dispatch] = useReducer(announcementReducer, init);

  useEffect(() => {
    dispatch(loadAction)
  }, []);

  useEffect(() => {
    console.log(state);
    if (state.type === loadAction.type) {
      dispatch(loadingAction);
      AnnouncementService.get().then((data) => {
        dispatch({ ...loadedAction, payload: data });
      }).catch(() => {
        dispatch({ ...errorAction, payload: "Failed to fetch" });
      });
    }
  }, [state]);

  return [state, dispatch];
}
