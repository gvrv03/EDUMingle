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
  return (
    <div>

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
