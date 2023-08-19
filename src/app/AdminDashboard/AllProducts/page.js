import ProductsTable from "@/Components/Admin/AllProducts/ProductsTable";
import CreateBlogs from "@/Components/Admin/CreateBlogs";
import HeaderWithSearchAndCreate from "@/Components/Admin/HeaderWithSearchAndCreate";
import { IconButton } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <div className=" bg-white p-5 -mx-2 md:-mt-2 flex-col flex gap-5  ">
      <h2 className="font-semibold    gap-2 flex text-base  items-center ">
        <IconButton
          color="inherit"
          className=" uil bg-gray-50 text-2xl uil-angle-left pColor "
        />
        <span>All Products</span>
      </h2>
      <HeaderWithSearchAndCreate/>
      <hr />
      <ProductsTable/>
    </div>
  );
};

export default page;
