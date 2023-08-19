import AdminHome from "@/Components/Admin/AdminHome";
import HeaderStat from "@/Components/Admin/HeaderStat";
import React from "react";

const page = () => {
  return (
    <div className="mt-3  no-scrollbar md:mt-1">
      <div className="flex-col flex gap-2" >
        <HeaderStat />
        <AdminHome />
      </div>
    </div>
  );
};

export default page;
