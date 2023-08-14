"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import { useAppStore } from "@/Context/UseStoreContext";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const AdminNavBar = ({ shadow, position, handleDrawerToggle }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { setSignOutState } = useAppStore();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const componentPosition = 200;
      const threshold = 100; // Adjust this threshold as needed

      if (scrollPosition > componentPosition - threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={` ${
          isSticky ? position + " top-0" : ""
        } bg-white  z-50  top-0 w-full  ${shadow} transition-all delay-100 ease-linear left-0    md:px-0 px-5  border-gray-200`}
      >
        <div className="flex flex-wrap justify-between   gap-5 items-center  m-auto  md:px-5 py-3">
          <div className="  flex justify-between   w-full  gap-5">
            <div className="flex  items-center md:w-full  gap-5">
              <div className="md:hidden block">
                <IconButton onClick={handleDrawerToggle} color="inherit">
                  <i className=" text-xl  w-5 grid place-items-center h-5 text-gray-500 uil uil-bars" />
                </IconButton>
              </div>
              <Link href="/AdminDashboard" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className=" h-6 md:h-8  mr-3 "
                  alt="Flowbite Logo"
                />
                <span className="self-center  text-base md:text-xl font-semibold whitespace-nowrap">
                  WebEase <span className="text-[7px] pColor">ADMIN</span>
                </span>
              </Link>
            </div>

            <div className="flex  justify-end w-full  gap-5">
              <div className="flex">
                <IconButton color="inherit">
                  <i className=" text-xl  w-5 grid place-items-center h-5 pColor uil uil-bell" />
                </IconButton>
                <IconButton color="inherit">
                  <i className=" text-xl  w-5 grid place-items-center h-5 pColor uil uil-cog" />
                </IconButton>
                <IconButton
                  color="inherit"
                  className="bg-blue-50"
                  onClick={() => {
                    setSignOutState(true);
                  }}
                >
                  <i className=" text-xl     w-5 grid place-items-center h-5 text-blue-800 uil uil-signout   " />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(AdminNavBar);
