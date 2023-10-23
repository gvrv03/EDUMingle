"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import { DashNav } from "@/NavItem/TopNav";
import { Divider, IconButton } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import AdminNavBar from "../AdminNavBar";

const AdminNavSidebar = () => {
  const { userDetails, setSignOutState } = useAppStore();
  const router = useRouter();
  const pathName = usePathname();
  const [adminNavState, setadminNavState] = useState(false);
  return (
    <div>

      <div className="px-5 bg-sky-50 py-2  " >
        <i className="uil text-xl uil-angle-left" />
      </div>
      <div className=" px-5 mt-5  ">
        {DashNav.map((text, index) => (
          <Link
            className={`
            text-left  text-black  hover:text-black hover:no-underline  py-2 px-5  hover:bg-blue-50 hover:rounded-md hover:font-semibold  flex gap-5 w-full`}
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

export default AdminNavSidebar;
