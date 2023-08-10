"use client";
import { useOrder } from "@/Context/UseOrderContext";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useEffect, useState } from "react";
import { FullScreenLoader } from "../LoadingSpinner";
import OrderCard from "./OrderCard";

const AllUserOrders = () => {
  const { fetchUserOrders } = useOrder();
  const { userOrders } = useAppStore();
  const [page, setpage] = useState(1);
  useEffect(() => {
    fetchUserOrders({
      page: page,
      limit: 100,
    });
  }, [page]);
  const { isLoading, data, count } = userOrders ? userOrders : {};
  return (
    <div className="mt-[69px] relative  md:mt-0">
      {!isLoading  && count === 0 && <div  className="p-5" >No Order Found</div>}
      {data?.length === 0 && isLoading && <FullScreenLoader styleHeight={"md:h-[70vh]"} />}
      <div className=" flex    flex-col gap-2 ">
        {data?.map((item, index) => {
          return <OrderCard orderDetail={item} key={index} />;
        })}{" "}
      </div>
    </div>
  );
};

export default AllUserOrders;
