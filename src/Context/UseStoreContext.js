"use client";
import { SavedProductAPI } from "@/API/Products/ProductAPI";
import { savedProductToFavoriteURL } from "@/helper/allLinks";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";

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

  const SavedProduct = async (productID) => {
    try {
      const res = await SavedProductAPI(productID);
      if (res?.isSuccess) {
        return toast.success(res.message);
      }
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };


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
        SavedProduct,
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
