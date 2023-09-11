"use client";
import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";
import Authentication from "./Authentication";
import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import SearchModal from "./SearchModal";
import SignOutModal from "./SignOut";
import TablOfContentModal from "./TablOfContentModal";

const RenderAllModal = () => {
  const {
    SignOutState,
    setSignOutState,
    sortState,
    setsortState,
    filterState,
    setfilterState,
    signInModal,
    setsignInModal,
    SeaarchState,
    setSeaarchState,
  } = useAppStore();
  return (
    <>
      <SignOutModal state={SignOutState} setstate={setSignOutState} />
      <ProductSort state={sortState} setstate={setsortState} />
      <ProductFilter state={filterState} setstate={setfilterState} />
      <Authentication state={signInModal} setstate={setsignInModal} />
      <SearchModal state={SeaarchState} setstate={setSeaarchState} />
    </>
  );
};

export default RenderAllModal;
