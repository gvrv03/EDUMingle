import { ProductsURL } from "@/helper/allLinks";
import React from "react";
import Pegination from "../Utility/Pegination";

import ProductCard from "./ProductCard";

export default async function Allproducts({ page, setpage }) {
  // const res = await fetch(ProductsURL + `?page=${page}&limit=10`);

  // const { products, totalPages } = await res.json();
  return (
    <>
    <div>
      All Products
    </div>
      {/* {products?.length === 0 && (
        <div className="w-full h-90 grid place-items-center bg-white mt-5">
          No Product Found
        </div>
      )}
      <section className="grid  grid-cols-2 mt-10 md:mt-0 md:grid-cols-5 w-full gap-5">
        {products?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              id={product._id}
              fullTitle={product.title}
              title={product.title.substring(0, 40) + "..."}
              thumbnail={product.thumbnail}
              price={product.pricing.price}
              comAtPrice={product.pricing.comAtPrice}
            />
          );
        })}
      </section>
      <Pegination page={page} totalPages={totalPages} setpage={setpage} /> */}
    </>
  );
}
