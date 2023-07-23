import ProductCard from "@/Components/Product/ProductCard";
import ProductHome from "@/Components/ProductDetail/ProductHome";
import MainCardHeader from "@/Components/Utility/MainCardHeader";
import React from "react";

const ProductDetal = () => {
  return (
    <div className="container  flex-col flex gap-2 m-auto">
      <ProductHome />

      <div className="p-5  flex gap-5 flex-col md:flex-row md:gap-10 bg-white">
        <div className="flex-col flex gap-3">
          <h1 className="font-semibold text-base">Top Brand</h1>
          <div className="flrc flex-col gap-1">
            <div className="flex gap-2 items-center">
              <i className=" pColor font-bold text-lg uil uil-check-circle" />
              <span>90% positive ratings from 100K+ customers</span>
            </div>

            <div className="flex gap-2 items-center">
              <i className=" pColor font-bold text-lg uil uil-check-circle" />
              <span>100K+ recent orders from this brand</span>
            </div>
            <div className="flex gap-2 items-center">
              <i className=" pColor font-bold text-lg uil uil-check-circle" />
              <span>7+ years on Amazon</span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-base">
            Highly rated by customers for
          </h1>
          <div className="flex gap-2 mt-5" >
            <div className="p-2 flex gap-1  bg-gray-100 w-fit">
              <i className="uil uil-thumbs-up" />
              <span>value for money</span>
            </div>
            <div className="p-2 flex gap-1  bg-gray-100 w-fit">
              <i className="uil uil-thumbs-up" />
              <span>Look Good</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 bg-white flex-col flex gap-5 ">
        <MainCardHeader name="Related Product" />
        <div className="flex gap-5 w-full  no-scrollbar  overflow-x-scroll ">
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
          <ProductCard styleOBJ="w-40"  />
        </div>
      </div>
    </div>
  );
};

export default ProductDetal;
