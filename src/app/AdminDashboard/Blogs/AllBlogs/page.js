"use client";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import HeaderWithSearchAndCreate from "@/Components/Admin/HeaderWithSearchAndCreate";
import MaintableCom from "@/Components/Utility/MainTableCom";
import { useBlogs } from "@/Context/UseBlogsContext";
import { useAppStore } from "@/Context/UseStoreContext";

const Page = () => {
  const { fetchBlogs } = useBlogs();
  const { blogsAll } = useAppStore();
  const [colData, setcolData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    fetchBlogs({
      page: page,
      limit: limit,
    });
  }, [page, limit]);
  const [blogID, setblogID] = useState("");
  console.log(blogsAll);
  const { data, isLoading, count, totalPages } = blogsAll ? blogsAll : {};
  if (data?.length > 1) {
    if (colData.length === 0) {
      setcolData(Object.keys(data[0]));
    }
  }
  return (
    // <div className=" bg-white p-5 -mx-2 md:-mt-2 flex-col flex gap-5  ">
    <div className=" bg-white p-5   md:mt-2 flex-col flex gap-5  ">
      <h2 className="font-semibold    gap-2 flex text-base  items-center ">
        <IconButton
          color="inherit"
          className=" uil bg-gray-50 text-2xl uil-angle-left pColor "
        />
        <span>All Blogs ({count}) </span>
      </h2>
      <HeaderWithSearchAndCreate
        page={page}
        limit={limit}
        setLimit={setLimit}
        setPage={setPage}
        totalPages={totalPages}
        create="/AdminDashboard/Blogs/CreateBlog"
      />
      <MaintableCom
        data={data}
        isLoading={isLoading}
        colData={colData}
        // EditSet={<EditSet  />}
        itemID={blogID}
        count={count}
        setItemID={setblogID}
      />
    </div>
  );
};

export default Page;
