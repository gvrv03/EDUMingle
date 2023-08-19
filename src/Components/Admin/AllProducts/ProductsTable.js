import ProductsData from "@/SampleData/ProductsData";
import { IconButton } from "@mui/material";
import React from "react";

const ProductsTable = () => {
  return (
    <div class="  md:w-full    no-scrollbar w-screen   md:border overflow-x-auto h-[60vh]">
      <table className="w-full     p-2 text-sm shadow-sm   text-left text-gray-500 ">
        <thead className=" text-gray-700 uppercase text-[12px] bg-gray-100 ">
          <th className=" w-fit px-2 text-center  py-4  pl-2">Sr.No.</th>
          <th className=" w-fit px-2 text-center  py-4 ">Image</th>
          <th className=" w-fit px-2 text-left  py-4 ">Title</th>
          <th className=" w-fit px-2 text-center  py-4 ">Category</th>
          <th className=" w-fit px-2 text-center  py-4 ">Type</th>
          <th className=" w-fit px-2 text-center  py-4 ">Author</th>
          <th className=" w-fit px-2 text-center  py-4 ">Price(₹)</th>
          <th className=" w-fit px-2 text-center  py-4 ">Created At</th>
          <th className=" w-fit px-2 text-center  py-4  pr-2 ">Edit/Delete</th>
        </thead>
        <br />

        <tbody className="    bg-red-600 text-[12px] ">
          {ProductsData?.map((item, index) => {
            return (
              <tr
                className={`   ${
                  index % 2 == 0 ? "bg-gray-50" : "bg-white"
                }  `}
              >
                <td className="py-3 text-center  px-2 ">{item?._id?.$oid}</td>
                <td className="font-semibold  py-3 grid place-items-center text-center ">
                  <img
                    src={item?.thumbnail}
                    className="w-10 rounded-full bg-gray-100  h-10 p-1 "
                  />
                </td>
                <th className="py-3 px-2  ">{item?.title}</th>
                <td className="py-3 px-2 text-center  ">
                  {item?.productOrganization?.category}
                </td>
                <td className="py-3 px-2  text-center ">
                  {item?.productOrganization?.type}
                </td>
                <td className="  p-1  text-[10px] font-semibold text-center text-orange-400">
                  {item.addeBy?.$oid}
                </td>
                <td className="py-3 px-2  text-center ">
                  {item?.pricing?.price}
                </td>
                <td className="py-3 px-2  text-center ">03/11/2003</td>
                <td className="py-3 px-2  text-center  ">
                  <IconButton
                    className="uil  uil-ellipsis-h  "
                    color="inherit"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <br />
      </table>
    </div>
  );
};

export default ProductsTable;
