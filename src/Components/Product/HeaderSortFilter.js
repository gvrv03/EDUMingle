"use client";
import React, { useState } from "react";
import ProductFilter from "../Modal/ProductFilter";
import ProductSort from "../Modal/ProductSort";

const SortFilter = () => {
  const [filterState, setfilterState] = useState(false);
  const [sortState, setsortState] = useState(true);
  return (
    <div className="fixed w-full left-0  md:hidden px-5 bg-white">
      <ProductFilter state={filterState} setstate={setfilterState} />
      <ProductSort state={sortState} setstate={setsortState} />
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
