"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import React from "react";

const MyAccountlayout = ({ children }) => {
  const { userDetails } = useUserAuth();

  if (userDetails?.isLogin) {
    return <div> {children} </div>;
  } else {
    return <div className="p-5 bg-white"  >You Need to Login</div>;
  }
};

export default MyAccountlayout;
