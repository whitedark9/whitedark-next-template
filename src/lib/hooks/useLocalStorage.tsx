"use client";

import { useCallback } from "react";

export default function useLocalStorage(key: string) {
  // Get item
  const getItem = useCallback(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } else {
      console.log("getItem from local storage failed! Window is undefined.");
    }
  }, [key]);

  // Do not stringify the value
  const setItem = useCallback(
    (value: any) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        console.log("setItem to local storage failed! Window is undefined.");
      }
    },
    [key],
  );

  return { getItem, setItem };
}
