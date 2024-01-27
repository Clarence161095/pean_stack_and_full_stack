import { useEffect } from "react";

let isConstructor = true;

export function useFacade() {

  // constructor
  // TODO: create an custom hook to handle constructor
  // that name is useConstructor that using behavior is same as useEffect
  useEffect(() => {
    if (isConstructor) {
      isConstructor = false;
      // constructor
      console.log("constructor");
    }
    console.log("onInit");
    // onInit
  }, []);

  // useConstructor(() => {
    
  // }, []);

  return {

  }
}
