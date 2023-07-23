"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import React, { memo } from "react";
import AccountCardHeader from "../Utility/AccountCardHeader";
import NavigationMyAcc from "./NavigationMyAcc";

const MyAcc = () => {
  const { signOut } = useUserAuth();
  return (
    <div className="flex-col  md:hidden flex gap-2">
      <NavigationMyAcc/>
      <div className=" grid place-items-center bg-white gap-5 p-5">
        <button onClick={signOut} className="pBtn w-full py-3 ">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default memo(MyAcc);
