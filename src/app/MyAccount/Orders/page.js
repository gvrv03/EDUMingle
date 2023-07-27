"use client";
import AllUserOrders from "@/Components/Order/AllUserOrders";
import AccountCardHeader from "@/Components/Utility/AccountCardHeader";
import { useOrder, UseOrderContexProvider } from "@/Context/UseOrderContext";
import React, { useEffect } from "react";
const OrderHistory = () => {
  return (
    <UseOrderContexProvider>
      <div className="flex flex-col  bg-white  ">
        <div className="flex items-center   text-black  bg-gray-50 p-5 py-2    gap-2 justify-start">
          <button
            onClick={() => {
              router.push("/MyAccount");
            }}
            className="md:hidden block pColor "
          >
            <i className="uil uil-angle-left-b -ml-3 text-2xl" />
          </button>
          <AccountCardHeader
            styleCus="font-semibold text-lg"
            name="My Orders"
          />
        </div>
          <AllUserOrders />
      </div>
    </UseOrderContexProvider>
  );
};

export default OrderHistory;
