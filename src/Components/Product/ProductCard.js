"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const ProductCard = ({
  styleOBJ,
  id,
  fullTitle,
  title,
  thumbnail,
  price,
  comAtPrice,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(
          "/Products/Product/" +
            fullTitle.replaceAll(" ", "_") +
            "?product=" +
            id
        );
      }}
      className=" cursor-pointer border  p-2 w-fit bg-white "
    >
      <div className={` ${styleOBJ}  `}>
        <img src={thumbnail} alt={fullTitle} />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="font-semibold text-[95%] ">{title}</h2>
        <div className="flex gap-2 text-[80%] ">
          <h3 className="font-semibold ">₹ {price}</h3>
          <strike className=" text-gray-400 font-semibold ">
            ₹ {comAtPrice}
          </strike>
          <h3 className="font-semibold text-red-500 ">20 %</h3>
        </div>{" "}
      </div>
    </div>
  );
};

export default memo(ProductCard);
