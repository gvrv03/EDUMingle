"use client";
import React, { memo } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const ProductCard = ({ styleOBJ }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/Products/Product/s76345tydfshjg");
      }}
      className=" cursor-pointer  p-2 w-fit bg-white "
    >
      <div className={` ${styleOBJ}  `}>
        <img src="https://img.ebonow.com/Products/CLA184.webp" alt="" />
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="font-semibold text-[100%] ">Wallet Card for Men</h2>
        <div className="flex gap-2 text-[90%] ">
          <h3 className="font-semibold ">₹ 499</h3>
          <strike className=" text-gray-400 font-semibold ">₹ 899</strike>
          <h3 className="font-semibold text-red-500 ">20 %</h3>
        </div>{" "}
      </div>
    </div>
  );
};

export default memo(ProductCard);
