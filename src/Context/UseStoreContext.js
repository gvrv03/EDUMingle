"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  const [signInModal, setsignInModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setsignInModal(true);
    }, 30000);
  }, []);

  return (
    <useStoreContext.Provider value={{ signInModal, setsignInModal }}>
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
