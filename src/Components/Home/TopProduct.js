import React, { memo } from "react";
import MainCardHeader from "../Utility/MainCardHeader";
import ProductCard from "../Product/ProductCard";

const TopProduct = () => {
  return (
    <div className="p-5 bg-white flex flex-col gap-5  ">
      <MainCardHeader name="Top Products" />
      <div className="flex gap-5 w-full  no-scrollbar  overflow-x-scroll ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default memo(TopProduct);
