import useConstructor from "../../../../hooks/useConstructor";
import useInit from "../../../../hooks/useInit";

export function useFacade() {

  useConstructor(() => {
    console.log(`Announcement useFacade onConstructor`);
  }, 'Announcement')

  useInit(() => {
    console.log(`Announcement useFacade onInit`);
  })

  return {

  }
}
