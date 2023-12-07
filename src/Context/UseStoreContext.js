"use client";
import { SendEmailAPI } from "@/API/Email/SendMail";
import { SavedProductAPI } from "@/API/Products/ProductAPI";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  //----------------------------UserDetail State //----------------------------
  const [userDetails, setuserDetails] = useState({});

  //----------------------------All Blogs State //----------------------------
  const [blogsAll, setblogsAll] = useState({
    data: [],
    isLoading: true,
    error: null,
    count: 0,
    totalPages: 0,
  });

  //----------------------------All User Orders State //----------------------------
  const [userOrders, setuserOrders] = useState({
    data: [],
    isLoading: true,
    error: null,
    count: 0,
    totalPages: 0,
  });
  //----------------------------All Products State //----------------------------
  const [AllProducts, setAllProducts] = useState({
    data: [],
    isLoading: true,
    error: null,
    count: 0,
    totalPages: 0,
  });

  //----------------------------All Home Data State //----------------------------
  const [HomeData, setHomeData] = useState({
    AppName: "DevTown",
    AppLogo: "https://flowbite.com/docs/images/logo.svg",
  });
  //----------------------------Modal State State //----------------------------
  const [signInModal, setsignInModal] = useState(false);
  const [SignOutState, setSignOutState] = useState(false);
  const [filterState, setfilterState] = useState(false);
  const [sortState, setsortState] = useState(false);
  const [SeaarchState, setSeaarchState] = useState(false);
  const [TableOfContentState, setTableOfContentState] = useState(false);

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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setTimeout(() => {
        setsignInModal(true);
      }, 15000);
    }
  }, []);
//-----------Send an Email -----------
  const sendEmail = async ({ userEmails, subject, emailData }) => {
    const { error } = await SendEmailAPI({ userEmails, subject, emailData });
    if (error) {
      return toast.error(error.message);
    }
    return toast.success("Email Send");
  };


  
  return (
    <useStoreContext.Provider
      value={{
        AllProducts,
        setAllProducts,
        signInModal,
        setsignInModal,
        userDetails,
        setuserDetails,
        userOrders,
        SavedProduct,
        setuserOrders,
        SignOutState,
        setSignOutState,
        filterState,
        setfilterState,
        sortState,
        setsortState,
        SeaarchState,
        setSeaarchState,
        blogsAll,
        setblogsAll,
        TableOfContentState,
        setTableOfContentState,
        HomeData,
        setHomeData,
        sendEmail
      }}
    >
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
