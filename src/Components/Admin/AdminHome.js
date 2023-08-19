"use client";
import React from "react";
import BalanceCard from "./BalanceCard";
import OrderSellChart from "./Charts/OrderSellChart";
import UserChart from "./Charts/UserChart";
import UserPieChart from "./Charts/UserPieChart";
import LatestOrder from "./LatestOrder";

const AdminHome = () => {
  return (
    <div className="flex-col flex gap-2">
      <div className="flex gap-2   md:flex-row  flex-col">
        <div className="bg-white w-full  md:w-[30%] p-5 ">
          <BalanceCard />
        </div>{" "}
        <div className="bg-white w-full  md:w-[50%] p-5 ">
          <UserChart />
        </div>{" "}
        <div className="bg-white    w-full md:w-[20%] p-5 ">
          <UserPieChart />
        </div>
      </div>

      <div className="flex gap-2   md:flex-row  flex-col">
        <div className="bg-white w-full  md:w-[60%] p-5 ">
          <OrderSellChart />
        </div>{" "}
        <div className="bg-white w-full  md:w-[40%] p-5 ">
          <LatestOrder />
        </div>{" "}
       
      </div>
    </div>
  );
};

export default AdminHome;
