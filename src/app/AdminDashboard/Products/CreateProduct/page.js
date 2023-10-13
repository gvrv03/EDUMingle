import CreateProduct from "@/Components/Admin/AllProducts/CreateProduct";
import { IconButton } from "@mui/material";
import React from "react";

const PageCreateProduct = () => {
  return (
    <div className="p-5 bg-white  md:-mt-2 md:-mx-2 flex-col flex gap-5  ">
      <h2 className="font-semibold  gap-1 flex text-xl  items-center ">
        <IconButton
          color="inherit"
          className=" uil text-2xl uil-angle-left pColor "
        />
        <span>Create Product</span>
      </h2>
      <CreateProduct/>
    </div>
  );
};

export default PageCreateProduct;
