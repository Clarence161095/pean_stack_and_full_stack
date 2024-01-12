import { createContext, useEffect, useReducer } from "react";
import AnnouncementService from "../../../../services/AnnouncementService";
import { announcementReducer } from "./reduce";
import { errorAction, loadAction, loadedAction, loadingAction } from "./action";

export const AnnouncementStoreContext = createContext({});

export default function AnnouncementEffect({ children }) {
  const [state, dispatch] = useReducer(announcementReducer, { list: [] });

  useEffect(() => {
    // TODO: deep dive here
    if (state.type === loadAction.type) {
      dispatch(loadingAction);
      AnnouncementService.get().then((data) => {
        dispatch({ ...loadedAction, payload: data });
      }).catch((error) => {
        dispatch({ ...errorAction, payload: error });
      });
    }
  }, [state]);

  return <AnnouncementStoreContext.Provider value={{ state, dispatch }}>
    {children}
  </AnnouncementStoreContext.Provider>
}
