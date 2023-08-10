import MyAcc from "@/Components/MyAccount/MyAcc";
import UserProfile from "@/Components/MyAccount/UserProfile";
import React, { memo } from "react";

const MyAccount = () => {
  return (
    <>
      <MyAcc />
      <div className="hidden md:block" >
        <UserProfile />{" "}
      </div>{" "}
    </>
  );
};

export default memo(MyAccount);
