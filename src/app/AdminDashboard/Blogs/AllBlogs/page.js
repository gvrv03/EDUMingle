"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import HeaderWithSearchAndCreate from "@/Components/Admin/HeaderWithSearchAndCreate";
import MaintableCom from "@/Components/Utility/MainTableCom";
import { useBlogs } from "@/Context/UseBlogsContext";
import { useAppStore } from "@/Context/UseStoreContext";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
const Page = () => {
  const { fetchBlogs } = useBlogs();
  const { blogsAll, refresh } = useAppStore();
  const [colData, setcolData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filterBlogs, setfilterBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs({
      page: page,
      limit: limit,
    });
  }, [page, limit, refresh]);
  const [blogID, setblogID] = useState("");
  const { data, isLoading, count, totalPages } = blogsAll ? blogsAll : {};
  if (data?.length > 1) {
    if (colData.length === 0) {
      setcolData(Object.keys(data[0]));
    }
  }

  return (
    <div className=" bg-white p-5 flex-col flex gap-5  ">
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
        noOfData={data?.length}
        setPage={setPage}
        totalPages={totalPages}
        create="/AdminDashboard/Blogs/CreateBlog"
      />

      <div className="w-[92vw] md:w-auto  ">
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
    </div>
  );
};

export default Page;
