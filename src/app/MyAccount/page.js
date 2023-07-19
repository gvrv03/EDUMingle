import MyAcc from "@/Components/MyAccount/MyAcc";
import UserProfile from "@/Components/MyAccount/UserProfile";
import React, { memo } from "react";

const MyAccount = () => {
  return (
    <div>
      <MyAcc />
      <div className="hidden md:block" >
        <UserProfile />{" "}
      </div>{" "}
    </div>
  );
};

export default memo(MyAccount);
