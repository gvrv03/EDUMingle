import AdminHome from "@/Components/Admin/AdminHome";
import HeaderStat from "@/Components/Admin/HeaderStat";
import React from "react";

const Page = () => {
  return (
    <div className="  no-scrollbar md:m-2 m-0 mt-4">
      <div className="flex-col flex gap-2" >
        <HeaderStat />
        <AdminHome />
      </div>
    </div>
  );
};

export default Page;
