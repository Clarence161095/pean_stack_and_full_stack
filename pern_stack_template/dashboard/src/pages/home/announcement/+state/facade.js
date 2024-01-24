import { useEffect } from "react";

let isConstructor = true;

export function useFacade() {

  // constructor
  useEffect(() => {
    if (isConstructor) {
      isConstructor = false;
    }
  }, []);

  return {

  }
}
