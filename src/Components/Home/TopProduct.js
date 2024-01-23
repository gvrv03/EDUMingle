import React, { memo, Suspense } from "react";
import MainCardHeader from "../Utility/MainCardHeader";
import ProductCard from "../Product/ProductCard";
import { ProductsURL } from "@/helper/allLinks";
import { unstable_noStore } from "next/cache";

const TopProduct = async () => {
  unstable_noStore();
  const res = await fetch(ProductsURL + `?page=1&limit=10`);
  const Data = await res.json();
  if (Data?.products === undefined) {
    return (
      <div className="h-screen w-full grid place-items-center  bg-white ">
        Error occuured
      </div>
    );
  }

  return (
    <div className="p-5 bg-white flex flex-col gap-5  ">
      <MainCardHeader name="Top Products" />
      <div className="flex gap-5  w-full  no-scrollbar   overflow-x-scroll ">
        {Data?.products?.length == 0 && "No Product Found"}
        {Data?.products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product._id}
              fullTitle={product.title}
              title={product.title}
              thumbnail={product.thumbnail}
              price={product.pricing.price}
              styleOBJ=" w-40 md:w-48"
              comAtPrice={product.pricing.comAtPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(TopProduct);
