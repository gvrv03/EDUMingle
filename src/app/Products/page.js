import ProductCard from "@/Components/Product/ProductCard";
import HeaderSortFilter from "@/Components/Product/HeaderSortFilter";
import ProductHome from "@/Components/ProductDetail/ProductHome";
import MainCardHeader from "@/Components/Utility/MainCardHeader";
import React from "react";

const ProductDetal = () => {
  return (
    <div className="container  md:px-0 px-5 flex-col flex gap-2 m-auto">
      <HeaderSortFilter />

      <div className="grid  grid-cols-2 mt-[75px] md:mt-0 md:grid-cols-5 w-full  md:gap-2 gap-5">
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
        <ProductCard styleOBJ="w-full" />
      </div>
    </div>
  );
};

export default ProductDetal;
