"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import React, { memo } from "react";
import AccountCardHeader from "../Utility/AccountCardHeader";
import NavigationMyAcc from "./NavigationMyAcc";

const MyAcc = () => {
  const { signOut } = useUserAuth();
  return (
    <div className="flex-col  md:hidden flex gap-2">
      <div className="bg-white grid grid-cols-2 gap-5 p-5">
        <button className="w-full border p-2 rounded-sm font-medium text-base text-left ">
          {" "}
          <i className="uil uil-shopping-cart pColor text-lg mr-2" />{" "}
          <span>Orders</span>
        </button>
        <button className="w-full border p-2 rounded-sm font-medium text-base text-left ">
          {" "}
          <i className="uil uil-heart pColor text-lg mr-2" />{" "}
          <span>Wishlist</span>
        </button>
        <button className="w-full border p-2 rounded-sm font-medium text-base text-left ">
          {" "}
          <i className="uil uil-gift pColor text-lg mr-2" />{" "}
          <span>Coupans</span>
        </button>
        <button className="w-full border p-2 rounded-sm font-medium text-base text-left ">
          {" "}
          <i className="uil uil-headphones pColor text-lg mr-2" />{" "}
          <span>Need Help</span>
        </button>
      </div>

      <NavigationMyAcc/>

      <div className=" grid place-items-center gap-5 p-5">
        <button onClick={signOut} className="pBtn w-full py-3 ">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default memo(MyAcc);
