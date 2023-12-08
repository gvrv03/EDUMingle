import { useAppStore } from "@/Context/UseStoreContext";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { Divider, IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import AdminNavBar from "../AdminNavBar";
import AdminSidebar from "./AdminSidebar";

const HomeNavSidebar = () => {
  const { userDetails, setSignOutState } = useAppStore();
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div>
      {userDetails?.isLogin ? (
        <div className="flex justify-between w-full py-2 px-5 bg-blue-900 text-white ">
          {" "}
          <button
            onClick={() => {
              if (userDetails?.isLogin) {
                return router.push("/MyAccount");
              }
              return setsignInModal(true);
            }}
            className="flex items-center gap-4     "
          >
            <img
              src={userDetails?.User?.image}
              className="w-8 border rounded-full"
              alt={userDetails?.User?.name}
            />
            <span className="">Hey, {userDetails?.User?.name} </span>
          </button>
          <IconButton
            color="inherit"
            onClick={() => {
              setSignOutState(true);
            }}
          >
            <i className=" text-xl     w-5 grid place-items-center h-5  text-white uil uil-signout   " />
          </IconButton>
        </div>
      ) : (
        <button className="w-full p-5 flex items-center gap-4   bg-blue-900 text-white  ">
          <i className="uil uil-user" /> <span className="">Sign In</span>
        </button>
      )}
      <div className=" px-5 mt-5  ">
        {TopNav.map((text, index) => (
          <Link
            className={`${
              pathName.substring(0, 5) === text.location.substring(0, 5)
                ? "bg-blue-50 rounded-md font-semibold"
                : ""
            } text-left  text-black  hover:text-black hover:no-underline  py-2 px-5  hover:bg-blue-50 hover:rounded-md hover:font-semibold  flex gap-5 w-full`}
            key={index}
            href={text.location}
          >
            <i className={`${text.icon}`} />
            <span>{text.name}</span>{" "}
          </Link>
        ))}
        {userDetails.isRoot || userDetails.isAdmin ? (
          <div className=" text-left text-black items-center   flex justify-between hover:text-black hover:no-underline px-5 py-2 hover:bg-blue-50 hover:rounded-md hover:font-semibold  gap-5 w-full">
            <button
              onClick={() => {
                router.push("/AdminDashboard");
              }}
              className="flex gap-5"
            >
              <i className={`uil uil-bell pColor `} />
              <span className="text-sm ">Dashboard</span>{" "}
            </button>
          </div>
        ) : (
          ""
        )}

        <Divider sx={{ margin: "10px 0 " }} />

        {Legal.map((text, index) => (
          <Link
            className={`${
              pathName.substring(0, 5) === text.location.substring(0, 5)
                ? "bg-blue-50 rounded-md"
                : ""
            } text-left  py-2 px-5 hover:bg-blue-50 text-black  hover:text-black hover:no-underline hover:rounded-md hover:font-semibold  flex gap-5 w-full`}
            key={index}
            href={text.location}
          >
            <i className={`${text.icon}`} />
            <span>{text.name}</span>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeNavSidebar;
