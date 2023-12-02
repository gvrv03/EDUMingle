"use client";
import MainTableCom from "@/Components/Utility/MainTableCom";
import { useProduct } from "@/Context/UseProductContext";
import React, { useState } from "react";
import { useEffect } from "react";
import HeaderWithSearchAndCreate from "@/Components/Admin/HeaderWithSearchAndCreate";
import { IconButton } from "@mui/material";
import { useAppStore } from "@/Context/UseStoreContext";

const Page = () => {
  const { AllProducts } = useAppStore();
  const { fetchProducts } = useProduct();
  const [colData, setcolData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    fetchProducts({
      page: page,
      limit: limit,
    });
  }, [page, limit]);
  const [productID, setProductID] = useState("");
  const { data, isLoading, totalPages, count } = AllProducts ? AllProducts : {};
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
        <span>All Products ({count})</span>
      </h2>
      <HeaderWithSearchAndCreate
        limit={limit}
        page={page}
        setLimit={setLimit}
        setPage={setPage}
        totalPages={totalPages}
        create="/AdminDashboard/Products/CreateProduct"
      />
      <hr />
      <MainTableCom
        data={data}
        isLoading={isLoading}
        colData={colData}
        // EditSet={<EditSet  />}
        itemID={productID}
        count={count}
        setItemID={setProductID}
      />
    </div>
  );
};

export default Page;
