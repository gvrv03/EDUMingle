"use client";
import { useOrder } from "@/Context/UseOrderContext";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useEffect, useState } from "react";
import { FullScreenLoader } from "../LoadingSpinner";
import DefaultBTN from "../Utility/DefaultBTN";
import OrderCard from "./OrderCard";

const AllUserOrders = () => {
  const { fetchOrders } = useOrder();
  const { userOrders } = useAppStore();
  console.log(userOrders);
  const [page, setpage] = useState(1);
  useEffect(() => {
    fetchOrders({
      queryObj: { User: localStorage.getItem("id") },
      page: page,
      limit: 1000,
    });
  }, [page]);
  const { isLoading, data, count } = userOrders ? userOrders : {};
  return (
    <>
      {!isLoading  && count === 0 && <div  className="p-5" >No Order Found</div>}
      {data?.length === 0 && isLoading && <FullScreenLoader />}
      <div className=" flex  mx-5   flex-col gap-5 mt-5">
        {data?.map((item, index) => {
          return <OrderCard orderDetail={item} key={index} />;
        })}{" "}
      </div>
    </>
  );
};

export default AllUserOrders;
