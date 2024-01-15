import { createContext } from "react";
import useAnnouncementEffect from "../pages/home/announcement/+store/effect";

export const StoreContext = createContext([]);

export default function StoreContextProvider({ children }) {
  const [announcementState, dispatchAnnouncementState] = useAnnouncementEffect({ list: [] });

  const value = {
    announcementState,
    dispatchAnnouncementState,
    homeState: {},
    dispatchHomeState: () => {},
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}