import { useContext, useEffect } from "react";
import { AnnouncementStoreContext } from "./+store/effect";
import { loadAction } from "./+store/action";

export default function Announcement() {
  const { state, dispatch } = useContext(AnnouncementStoreContext);

  useEffect(() => {
    dispatch(loadAction)
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="w-full">
      {
        state?.loading ?
          <div>Loading...</div> :
          <ul>
            {
              state?.list && state.list.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            }
          </ul>
      }
      {
        state?.error && <div>{state.error}</div>
      }
    </div>
  )
}
