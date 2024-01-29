/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export default function useInit(callback) {
  useEffect(() => {
    callback();
  }, []);
}
