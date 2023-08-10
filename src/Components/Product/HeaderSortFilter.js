"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React, { useState } from "react";

const SortFilter = () => {
  const { setsortState, setfilterState } = useAppStore();
  return (
    <div className="fixed w-full left-0 z-40   top-14 md:hidden px-5 bg-white">
      <div className="py-2  justify-between flex">
        <button
          onClick={() => {
            setsortState(true);
          }}
          className="flex  py-1 px-5 border rounded-full    items-center    gap-2  font-semibold"
        >
          <i className="uil    pColor text-lg   uil-sort-amount-up" />
          <span>Sort</span>
        </button>
        <button
          onClick={() => {
            setfilterState(true);
          }}
          className="flex  py-1 px-5 border rounded-full    items-center   gap-2 font-semibold"
        >
          <i className="uil    pColor text-lg   uil-filter" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default SortFilter;
