"use client";
import AllUserOrders from "@/Components/Order/AllUserOrders";
import AccountCardHeader from "@/Components/Utility/AccountCardHeader";
import CardHeaderWithSearch from "@/Components/Utility/CardHeaderWithSearch";
import { useOrder, UseOrderContexProvider } from "@/Context/UseOrderContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const OrderHistory = () => {
  const router = useRouter();
  return (
    <UseOrderContexProvider>
      <div className="flex flex-col gap-2   ">
        <CardHeaderWithSearch
          styleCus="font-semibold text-lg"
          name="My Orders"
        />
        <AllUserOrders />
      </div>
    </UseOrderContexProvider>
  );
};

export default OrderHistory;
