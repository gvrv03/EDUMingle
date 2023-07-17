"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { memo } from "react";
import Sidebar from "./Sidebar/Sidebar";

const NavBar = () => {
  const router = useRouter();
  const { setsignInModal } = useAppStore();
  return (
    <>
      <nav className="bg-white fixed z-50  w-full left-0    md:px-0 px-5  border-gray-200">
        <div className="flex flex-wrap justify-between gap-5 items-center container m-auto py-4">
          <div className="flex justify-between md:w-auto  w-full  gap-5">
            <div className="flex gap-5">
              <Link href="https://flowbite.com" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="Flowbite Logo"
                />
                <span className="self-center hidden md:block  text-2xl font-semibold whitespace-nowrap">
                  The Minimal
                </span>
              </Link>
              <div className="flex gap-2  items-center">
                <i className="uil pColor text-2xl  uil-map-marker" />
                <div>
                  <h6 className="text-xs md:text-sm   font-normal">Hello</h6>
                  <h6 className="text-xs md:text-sm font-semibold">
                    Select your Address
                  </h6>
                </div>
              </div>
            </div>
            <div className="md:hidden block">
              <Sidebar />
            </div>
          </div>
          <div className="flex justify-between md:w-auto  w-full  gap-5  items-center">
            <div className="w-full md:w-auto  border   rounded-md ">
              <input
                type="search"
                className="w-full md:w-auto outline-none  text-xs p-2"
                placeholder="Search..."
              />
            </div>
            <div className="flex gap-2 items-center ">
              <button
                onClick={() => {
                  setsignInModal(true);
                }}
              >
                <i className="uil text-2xl pColor  uil-user" />
              </button>
              <button>
                <i className="uil text-2xl pColor  uil-heart" />
              </button>
              <button>
                <i className="uil text-2xl pColor  uil-shopping-cart" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(NavBar);
