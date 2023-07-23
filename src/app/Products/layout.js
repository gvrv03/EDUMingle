"use client";
import NavigationMyAcc from "@/Components/MyAccount/NavigationMyAcc";
import { useUserAuth } from "@/Context/UserAuthContext";
import { UserAccountNav } from "@/NavItem/TopNav";
import React, { memo } from "react";

const Productslayout = ({ children }) => {
  const { signOut, userDetails } = useUserAuth();

  return (
    <div className=" container m-auto relative justify-between flex gap-2 ">
   
      <aside
        className={` md:w-[15%] transition-all delay-100 ease-linear hidden  md:h-[85vh] fixed md:flex z-40  
      md:left-auto top-28 md:top-auto   items-start   flex-col gap-2     `}
      >
        <div className="w-full bg-white ">
          <NavigationMyAcc />
        </div>
      </aside>
      <main className=" w-full md:w-[80.7%] absolute right-0 text-justify">
        
        <div className="mt-0">{children}</div>{" "}
        <div className="w-full bg-white ">
          <img
            className="w-full"
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
            alt=""
          />
        </div>
      </main>
    </div>
  );
};

export default memo(Productslayout);
