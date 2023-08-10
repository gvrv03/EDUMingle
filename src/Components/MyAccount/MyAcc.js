"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { memo } from "react";
import NavigationMyAcc from "./NavigationMyAcc";

const MyAcc = () => {
  const { setSignOutState } = useAppStore();
  return (
    <div className="flex-col  md:hidden flex gap-2">
      <NavigationMyAcc />
      <div className=" grid place-items-center bg-white gap-5 p-5">
        <button
          onClick={() => {
            setSignOutState(true);
          }}
          className="pBtn w-full py-3 "
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default memo(MyAcc);
