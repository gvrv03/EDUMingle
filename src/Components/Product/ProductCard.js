"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SavedButton from "./SavedButton";
import Link from "next/link";
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
    <div className=" relative border rounded-sm flex-col flex  p-2 md:p-5 w-full bg-white ">
      <div className="absolute  right-2 md:right-5 md:top-5  top-2 ">
        <SavedButton
          styleicon=" text-xs "
          style="p-1 rounded-sm w-8 h-8  grid place-items-center      "
          productID={id}
        />
      </div>
      <div className={` ${styleOBJ}    backImage`}>
        <img
        
          src={thumbnail}
          className=" bg-white  bg-cover object-cover"
          loading="lazy"
          alt={fullTitle}
        />
      </div>{" "}
      <div className="   gap-2 flex flex-col ">
        <h2 className="font-semibold  md:text-[15px] text-base">{title}</h2>
        <div className="flex gap-2 items-center  text-xs md:text-sm">
          <p className="font-semibold  ">₹ {price}</p>
          <strike className=" text-gray-400  text-[10px] font-semibold ">
            ₹ {comAtPrice}
          </strike>
          <p className="font-semibold text-red-500 ">
            %{(100 - (price / comAtPrice) * 100).toFixed(1)} off
          </p>
        </div>{" "}
        <div className="flex items-center flex-wrap ">
          <button
            type="button"
            onClick={() => {
              router.push(
                "/Products/Product/" +
                  fullTitle.replaceAll(" ", "_") +
                  "?product=" +
                  id
              );
            }}
            className="no-underline hover:bg-sky-100 font-semibold bg-sky-50 rounded-full flex items-center w-full p-2 text-indigo-500 justify-center text-[10px] md:text-xs   md:mb-2 lg:mb-0"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
