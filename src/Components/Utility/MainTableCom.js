"use client";
import moment from "moment";
import TableSkeleton from "../Skeleton/TableSkeleton";
// import React from "react";
// import { FullScreenLoader } from "../LoadingSpinner";
// import { IconButton } from "@mui/material";
// const MainTableCom = ({
//   data,
//   colData,
//   isLoading,
//   count,
//   itemID,
//   setItemID,
// }) => {
//   return (
//     <div className="  md:w-full      no-scrollbar w-[92vw] h-[50vh]     overflow-scroll">
//       {data?.length === 0 && isLoading ? (
//         <TableSkeleton />
//       ) : (
//         <table className="w-full      text-sm shadow-sm   text-left text-gray-500 ">
//           <thead className=" text-gray-700 uppercase text-[12px] border-b  shadow-md ">
//             <tr>
//               {colData?.map((col, index) => {
//                 return (
//                   <th key={index} className=" w-fit  text-left py-4   px-5">
//                     {col === "image" ||
//                     col === "artical" ||
//                     col === "comments" ||
//                     col === "images" ||
//                     col === "pricing" ||
//                     col === "productOrganization" ||
//                     col === "thumbnail" ||
//                     col === "keywords" ||
//                     col === "reviews"
//                       ? null
//                       : col}
//                   </th>
//                 );
//               })}
//             </tr>
//           </thead>
//           <tbody className="    text-[12px] ">
//             {data?.map((item, index) => {
//               return (
//                 <tr
//                   key={index}
//                   className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
//                 >
//                   {colData?.map((col, index) => {
//                     return (
//                       <td
//                         key={index}
//                         className="py-2  text-left text-xs   px-5"
//                       >
//                         {col === "image" ||
//                         col === "artical" ||
//                         col === "comments" ||
//                         col === "images" ||
//                         col === "pricing" ||
//                         col === "productOrganization" ||
//                         col === "thumbnail" ||
//                         col === "keywords" ||
//                         col === "reviews"
//                           ? null
//                           : col === "date"
//                           ? moment(item[col]).format("DD/MM/YYYY")
//                           : col === "createdAt"
//                           ? moment(item[col]).format("DD/MM/YYYY")
//                           : col === "updatedAt"
//                           ? moment(item[col]).format("DD/MM/YYYY")
//                           : item[col]}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}

//       {!isLoading && count === 0 && <div className="p-5">No Order Found</div>}
//     </div>
//     // <>
//     // <div>
//     //   fsdf</div></>
//   );
// };

// export default MainTableCom;

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

export default function MaintableCom({
  data,
  colData,
  isLoading,
  count,
  itemID,
  setItemID,
}) {
  return (
    <Paper style={{padding:"5px", boxShadow:"none", border:"none",width: "100%" }}   >
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TableContainer sx={{ maxHeight: 570 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {colData?.map((col, index) => (
                  <TableCell
                    key={index}
                    style={{
                      fontSize: "12px",
                      textTransform: "capitalize",
                      fontWeight: 600,
                    }}
                    align="left"
                  >
                    {col === "image" ||
                    col === "artical" ||
                    col === "comments" ||
                    col === "images" ||
                    col === "pricing" ||
                    col === "productOrganization" ||
                    col === "thumbnail" ||
                    col === "keywords" ||
                    col === "reviews"
                      ? null
                      : col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {colData?.map((col, index) => {
                      return (
                        <TableCell
                          key={index}
                          style={{ fontSize: "12px" }}
                          align="left"
                        >
                          {col === "image" ||
                          col === "artical" ||
                          col === "comments" ||
                          col === "images" ||
                          col === "pricing" ||
                          col === "productOrganization" ||
                          col === "thumbnail" ||
                          col === "keywords" ||
                          col === "reviews"
                            ? null
                            : col === "date"
                            ? moment(item[col]).format("DD/MM/YYYY")
                            : col === "createdAt"
                            ? moment(item[col]).format("DD/MM/YYYY")
                            : col === "updatedAt"
                            ? moment(item[col]).format("DD/MM/YYYY")
                            : item[col]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {count === 0 && "No Data Found"}
        </TableContainer>
      )}
    </Paper>
  );
}
