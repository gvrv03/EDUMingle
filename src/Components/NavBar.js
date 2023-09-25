"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import { useAppStore } from "@/Context/UseStoreContext";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const NavBar = ({ shadow, position }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { setsignInModal, userDetails, setSeaarchState } = useAppStore();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const componentPosition = 100;
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
          isSticky ? `${position} top-0 ${shadow}` : ""
        } bg-white  z-50  top-0 w-full   left-0    md:px-0 px-5  border-gray-200`}
      >
        <div className="flex flex-wrap justify-between   gap-5 items-center  m-auto  md:px-5 py-3">
          <div className="  flex justify-between   w-full  gap-5">
            <div className="flex  items-center md:w-full  gap-5">
              <div className="md:hidden block">
                <Sidebar />
              </div>
              <Link href="/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className=" h-6 md:h-8  mr-3 "
                  alt="Flowbite Logo"
                />
                <span className="self-center  text-base md:text-xl font-semibold whitespace-nowrap">
                  WebEase
                </span>
              </Link>
              {/* <div className="  hidden md:flex  gap-2  items-center">
                <i className="uil pColor text-2xl  uil-map-marker" />
                <div>
                  <h6 className="text-xs md:text-sm   font-normal">Hello</h6>
                  <h6 className="text-xs md:text-sm font-semibold">
                    Select your Address
                  </h6>
                </div>
              </div> */}
            </div>

            <div className="flex  justify-end w-full  gap-5">
              <div className="container items-center gap-5  justify-end  hidden md:flex  m-auto">
                {TopNav.map((text, index) => (
                  <button
                    className={`  ${
                      pathName.substring(0, 5) === text.location.substring(0, 5)
                        ? "pColor   border-b-2 border-red-500 "
                        : ""
                    }  text-left  font-semibold py-2 flex gap-2 items-center   hover:font-semibold  hover:border-b-2 hover:border-red-500 transition-all delay-75 ease-linear`}
                    key={index}
                    onClick={() => {
                      router.push(text.location);
                    }}
                  >
                    <i className={`${text.icon}  `} />
                    <span className="text-sm "> {text.name}</span>{" "}
                  </button>
                ))}

                {userDetails.isRoot || userDetails.isAdmin ? (
                  <button
                    className={`  text-left  font-semibold py-2 flex gap-2 items-center   hover:font-semibold  hover:border-b-2 hover:border-red-500 transition-all delay-75 ease-linear`}
                    onClick={() => {
                      router.push("/AdminDashboard");
                    }}
                  >
                    <i className={`uil uil-bell pColor `} />
                    <span className="text-sm ">Dashboard</span>{" "}
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="flex  ">
                <IconButton
                  color="inherit"
                  onClick={() => {
                    setSeaarchState(true);
                  }}
                >
                  <i className=" text-xl  w-5 grid place-items-center h-5 pColor   uil uil-search" />
                </IconButton>{" "}
                <IconButton color="inherit">
                  <i className=" text-xl  w-5 grid place-items-center h-5 pColor   uil uil-shopping-cart" />
                </IconButton>{" "}
                <IconButton
                  color="inherit"
                  onClick={() => {
                    if (userDetails?.isLogin) {
                      return router.push("/MyAccount");
                    }
                    return setsignInModal(true);
                  }}
                >
                  <i
                    className={`uil  text-xl  w-5 grid place-items-center h-5 pColor pColor ${
                      userDetails?.isLogin ? "uil-user-check  " : "uil-user"
                    } `}
                  />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default memo(NavBar);
