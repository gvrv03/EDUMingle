"use client";
import AllBlogs from "@/Components/BlogComp/AllBlogs";
import BlogCategory from "@/Components/BlogComp/BlogCategory";
import MostPopBlogs from "@/Components/BlogComp/MostPopBlogs";
import SortFilter from "@/Components/Product/HeaderSortFilter";
import AllBlogsSkeleton from "@/Components/Skeleton/AllBlogsSkeleton";
import React, { Suspense } from "react";
import { useState } from "react";

const AllProducts = () => {
  const [page, setpage] = useState(1);

  return (
    <div className=" bg-white p-5  md:p-5  h-full">
      <SortFilter />

      <Suspense fallback={<AllBlogsSkeleton />}>
        <AllBlogs page={page} setpage={setpage} />
      </Suspense>
     
    </div>
  );
};

export default AllProducts;
