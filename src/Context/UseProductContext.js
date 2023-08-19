"use client";
import { useCallback, useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppStore } from "./UseStoreContext";
const useProductContext = createContext();
export function UseProductContexProvider({ children }) {
  

  
  return (
    <useProductContext.Provider value={{}}>
      {children}
    </useProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(useProductContext);
}
