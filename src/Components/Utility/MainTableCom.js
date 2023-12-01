"use client";
import React from "react";
import moment from "moment";
import { FullScreenLoader } from "../LoadingSpinner";
import { IconButton } from "@mui/material";
import TableSkeleton from "../Skeleton/TableSkeleton";
const MainTableCom = ({
  data,
  colData,
  isLoading,
  count,
  itemID,
  setItemID,
}) => {
  return (
    <div className="  md:w-full      no-scrollbar w-[92vw] border   overflow-x-auto ">
      {data?.length === 0 && isLoading ? (
        <TableSkeleton />
      ) : (
        <table className="w-full      text-sm shadow-sm   text-left text-gray-500 ">
          <thead className=" text-gray-700 uppercase text-[12px] border-b  shadow-md ">
            <tr>
              {colData?.map((col, index) => {
                return (
                  <th key={index} className=" w-fit  text-left py-4   px-5">
                    {col === "image" ||
                    col === "artical" ||
                    col === "comments" ||
                    col === "keywords"
                      ? null
                      : col}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="    text-[12px] ">
            {data?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  {colData?.map((col, index) => {
                    return (
                      <td
                        key={index}
                        className="py-2  text-left text-xs   px-5"
                      >
                        {col === "image" ||
                        col === "artical" ||
                        col === "comments" ||
                        col === "keywords"
                          ? null
                          : col === "date"
                          ? moment(item[col]).format("DD/MM/YYYY")
                          : col === "createdAt"
                          ? moment(item[col]).format("DD/MM/YYYY")
                          : col === "updatedAt"
                          ? moment(item[col]).format("DD/MM/YYYY")
                          : item[col]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {!isLoading && count === 0 && <div className="p-5">No Order Found</div>}
    </div>
    // <>
    // <div>
    //   fsdf</div></>
  );
};

export default MainTableCom;

// <td className="font-semibold  py-3 grid place-items-center text-center ">
// <img
//   src={item?.image}
//   className="w-10 rounded-full bg-gray-100  h-10 p-1 "
// />
// </td>
// <th className="py-3 px-2  ">{item?.title}</th>
// <td className="py-3 px-2 text-center  ">{item?.category}</td>
// <td className="  p-1  text-[10px] font-semibold text-center text-orange-400">
// {item?.author}
// </td>
// <td className="py-3 px-2  text-center ">03/11/2003</td>
// <td className="py-3 px-2  relative  text-center  ">
// <IconButton
//   className="uil  uil-ellipsis-h  "
//   color="inherit"
//   onClick={() => {
//     if (itemID) {
//       setItemID("");
//     } else {
//       setItemID(item?._id);
//     }
//   }}
// />
// {/* <EditSet clickID={item?._id} itemID={itemID} /> */}
// </td>
