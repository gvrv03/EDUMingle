"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import { useRouter } from "next/navigation";
import React from "react";

const MyAccountlayout = ({ children }) => {
  const { userDetails } = useUserAuth();
  const router = useRouter();
  if (!userDetails?.isLogin) {
    router.push("/");
  }
  return <div> {children} </div>;
};

export default MyAccountlayout;
