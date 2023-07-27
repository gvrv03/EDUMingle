"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { checkSavedProductURL } from "@/helper/allLinks";
import { BtnSpinnerBlue } from "../LoadingSpinner";
import { useAppStore } from "@/Context/UseStoreContext";

const SavedButton = ({ productID, style, styleicon }) => {
  const [selected, setSelected] = useState(false);
  const [loading, setloading] = useState(false);
  const { SavedProduct, userDetails } = useAppStore();
  const checkSvaedAPi = async () => {
    const uID = localStorage.getItem("id");
    const res = await fetch(checkSavedProductURL, {
      method: "POST",
      body: JSON.stringify({
        productID: productID,
        userId: uID,
      }),
    });
    const data = await res.json();
    setSelected(data.isSaved);
  };

  const savedProduct = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!userDetails?.isLogin) {
      setloading(false);
      return toast.error("You need to Login");
    }
    await SavedProduct(productID);
    setloading(false);
  };

  useEffect(() => {
    checkSvaedAPi();
  }, [savedProduct]);

  return (
    <button
      type="button"
      disabled={loading ? true : false}
      onClick={savedProduct}
      className={`${style} border `}
    >
      {loading ? (
        <div className=" grid place-items-center">
          <BtnSpinnerBlue />
        </div>
      ) : (
        <i
          className={`bi  ${styleicon}  ${
            selected ? "bi-heart-fill text-red-500 " : "bi-heart"
          }  `}
        />
      )}
    </button>
  );
};

export default SavedButton;
