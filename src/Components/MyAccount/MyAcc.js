"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import React from "react";

const MyAcc = () => {
  const { signOut } = useUserAuth();
  return (
    <div className="flex-col flex gap-2">
      <div className="bg-white grid grid-cols-2 gap-5 p-5">
        <button className="w-full border p-2 rounded-sm font-semibold text-base text-left ">
          {" "}
          <i className="uil uil-shopping-cart pColor text-base mr-2" />{" "}
          <span>Orders</span>
        </button>
        <button className="w-full border p-2 rounded-sm font-semibold text-base text-left ">
          {" "}
          <i className="uil uil-heart pColor text-base mr-2" />{" "}
          <span>Wishlist</span>
        </button>
        <button className="w-full border p-2 rounded-sm font-semibold text-base text-left ">
          {" "}
          <i className="uil uil-tag pColor text-base mr-2" />{" "}
          <span>Coupans</span>
        </button>
        <button className="w-full border p-2 rounded-sm font-semibold text-base text-left ">
          {" "}
          <i className="uil uil-headphones pColor text-base mr-2" />{" "}
          <span>Need Help</span>
        </button>
      </div>

      <div className="bg-white grid place-items-center gap-5 p-5">
        <button onClick={signOut} className="pBtn w-full py-3 ">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default MyAcc;
