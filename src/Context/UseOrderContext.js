"use client";
import { getOrder } from "@/API/Products/OrderAPI";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";
import { useAppStore } from "./UseStoreContext";
const useOrderContext = createContext();
export function UseOrderContexProvider({ children }) {
  const { setuserOrders, userOrders } = useAppStore();

  const fetchOrders = async (data) => {
    try {
      setuserOrders({
        data: [],
        isLoading: true,
        error: null,
        count: 0,
        totatlPages: 0,
      });
      const OrderData = await getOrder(data);
      console.log(OrderData);
      return setuserOrders({
        data: OrderData?.orders,
        isLoading: false,
        count: OrderData?.orderCount,
        totatlPages: OrderData?.totalPages,
      });
    } catch (error) {
      return toast.error(error?.response?.data?.errorMsg);
    }
  };

  return (
    <useOrderContext.Provider value={{ fetchOrders }}>
      {children}
    </useOrderContext.Provider>
  );
}

export function useOrder() {
  return useContext(useOrderContext);
}
