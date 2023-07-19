"use client";
import NavigationMyAcc from "@/Components/MyAccount/NavigationMyAcc";
import { useUserAuth } from "@/Context/UserAuthContext";
import { UserAccountNav } from "@/NavItem/TopNav";
import React, { memo } from "react";

const MyAccountlayout = ({ children }) => {
  const { signOut, userDetails } = useUserAuth();

  if (userDetails?.isLogin) {
    return (
      <div className=" container m-auto relative justify-between flex gap-2 ">
        <aside
          className={` md:w-[15%] transition-all delay-100 ease-linear hidden  md:h-[85vh] fixed md:flex z-40  
      md:left-auto top-28 md:top-auto   items-start   flex-col gap-2     `}
        >
          <div className="bg-white flex gap-5 w-full p-5">
            <div className="w-10">
              <img src={userDetails?.User?.image} className="w-full" alt="" />
            </div>
            <div>
              <h4>Hello,</h4>
              <h2 className="font-semibold text-base">
                {userDetails?.User?.name}
              </h2>
            </div>
          </div>
          <div className="w-full" >
            <NavigationMyAcc />
          </div>

          <div className=" w-full bg-white grid place-items-center gap-5 p-5">
            <button onClick={signOut} className="pBtn w-full py-3 ">
              Log Out
            </button>
          </div>
        </aside>
        <main className=" w-full md:w-[80.7%] absolute right-0 text-justify">
          <div className="mt-0">{children}</div>{" "}
        </main>
      </div>
    );
  } else {
    return <div className="p-5 bg-white">You Need to Login</div>;
  }
};

export default memo(MyAccountlayout);
