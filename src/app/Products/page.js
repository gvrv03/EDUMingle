"use client";
import Allproducts from "@/Components/Product/Allproducts";
import SortFilter from "@/Components/Product/HeaderSortFilter";
import AllProductSkeleton from "@/Components/Skeleton/AllProductSkeleton";
import React, { Suspense } from "react";
import { useState } from "react";

const AllProducts = () => {
  const [page, setpage] = useState(1);

  return (
    <div className=" bg-white p-5  md:p-5  h-full">
      <SortFilter />

      <Suspense fallback={<AllProductSkeleton />}>
        <Allproducts setpage={setpage} page={page} />
      </Suspense>
    </div>
  );
};

export default AllProducts;
