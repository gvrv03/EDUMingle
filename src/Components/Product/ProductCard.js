"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SavedButton from "./SavedButton";
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
    <div className=" relative border flex-col flex  p-2 w-full bg-white ">
      <div className="absolute  right-2 top-2 ">
        <SavedButton
          styleicon=" text-xs "
          style="p-1 rounded-sm w-8 h-8  grid place-items-center      "
          productID={id}
        />
      </div>
      <div
        className={` ${styleOBJ}    backImage`}
      >
        <img
          src={thumbnail}
          className=" bg-white  bg-cover object-cover"
          loading="lazy"
          alt={fullTitle}
        />
      </div>{" "}
      <div
        onClick={() => {
          router.push(
            "/Products/Product/" +
              fullTitle.replaceAll(" ", "_") +
              "?product=" +
              id
          );
        }}
        className=" cursor-pointer flex flex-col "
      >
        <h2 className="font-semibold text-[95%] ">{title}</h2>
        <div className="flex gap-2 items-center text-[80%] ">
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
