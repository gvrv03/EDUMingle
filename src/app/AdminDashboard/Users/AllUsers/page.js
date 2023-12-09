"use client";
import { useUserAuth } from "@/Context/UserAuthContext";
import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import HeaderWithSearchAndCreate from "@/Components/Admin/HeaderWithSearchAndCreate";
import MaintableCom from "@/Components/Utility/MainTableCom";

const GetUsers = () => {
  const { fetchUsersAll, usersAll } = useUserAuth();
  const [colData, setcolData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10 );
  const [userID, setuserID] = useState("");

  useEffect(() => {
    fetchUsersAll({
      page: page,
      limit: limit,
    });
  }, [page, limit]);

  const { data, isLoading, count, totalPages } = usersAll ? usersAll : {};
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
      {/* <button
      type="submit"
      onClick={() => {
        jsonToExcelDownload([]);
      }}
    >
      Download
    </button> */}

      <div className="w-[92vw] md:w-auto  ">
        <MaintableCom
          data={data}
          isLoading={isLoading}
          colData={colData}
          // EditSet={<EditSet  />}
          itemID={userID}
          count={count}
          setItemID={setuserID}
        />
      </div>
    </div>
  );
};

export default GetUsers;
