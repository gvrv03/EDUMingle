"use client";
import * as React from "react";
import moment from "moment";
import TableSkeleton from "../Skeleton/TableSkeleton";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditData from "../Admin/EditData";

export default function MaintableCom({
  data,
  colData,
  isLoading,
  count,
  itemID,
  setItemID,
}) {
  console.log(colData);
  return (
    <Paper
      className="no-scrollbar "
      style={{
        // padding: "5px",
        boxShadow: "none",
        width: "100%",
      }}
    >
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <TableContainer
          style={{
            maxHeight: 500,
            background: "white",
            border: "0.5px solid #f5f5f5",
          }}
        >
          <Table
            stickyHeader
            className="no-scrollbar"
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {count > 0 && (
                  <TableCell
                    style={{
                      fontSize: "12px",
                      padding: "8px",
                      textTransform: "capitalize",
                      fontWeight: 600,
                    }}
                    align="left"
                  >
                    Sr.No.
                  </TableCell>
                )}
                {colData?.map((col, index) => (
                  <TableCell
                    key={index}
                    style={{
                      fontSize: "12px",
                      padding: "8px",
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
                    col === "__v" ||
                    col === "productOrganization" ||
                    col === "thumbnail" ||
                    col === "keywords" ||
                    col === "reviews" ||
                    col === "notification" ||
                    col === "password"
                      ? null
                      : col}
                  </TableCell>
                ))}
                {count > 0 && (
                  <TableCell
                    style={{
                      fontSize: "12px",
                      padding: "8px",
                      textTransform: "capitalize",
                      fontWeight: 600,
                    }}
                    align="left"
                  >
                    Edit
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell
                      style={{
                        fontSize: "12px",
                        padding: "8px",
                        color: "gray",
                      }}
                      align="center"
                    >
                      {index + 1}
                    </TableCell>
                    {colData?.map((col, index) => {
                      return (
                        <TableCell
                          key={index}
                          style={{
                            fontSize: "12px",
                            padding: "8px",
                            color: "gray",
                          }}
                          align="left"
                        >
                          {col === "image" ||
                          col === "artical" ||
                          col === "comments" ||
                          col === "images" ||
                          col === "__v" ||
                          col === "pricing" ||
                          col === "productOrganization" ||
                          col === "thumbnail" ||
                          col === "keywords" ||
                          col === "reviews" ||
                          col === "notification" ||
                          col === "password"
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
                    <TableCell
                      style={{
                        fontSize: "12px",
                        padding: "8px",
                        color: "gray",
                      }}
                      align="center"
                    >
                      <EditData />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {!isLoading && count === 0 && (
        <div className="p-5 bg-white border text-center font-semibold">
          No Data Found
        </div>
      )}
    </Paper>
  );
}
