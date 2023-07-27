"use client";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  //----------------------------UserDetail State //----------------------------
  const [userDetails, setuserDetails] = useState({});

  //----------------------------All User Orders State //----------------------------
  const [userOrders, setuserOrders] = useState({
    data: [],
    isLoading: false,
    error: null,
    count: 0,
    totatlPages: 0,
  });

  //----------------------------SignInModal State //----------------------------
  //----------------------------SignInModal State //----------------------------
  const [signInModal, setsignInModal] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setTimeout(() => {
        setsignInModal(true);
      }, 30000);
    }
  }, []);

  return (
    <useStoreContext.Provider
      value={{
        signInModal,
        setsignInModal,
        userDetails,
        setuserDetails,
        userOrders,
        setuserOrders,
      }}
    >
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
