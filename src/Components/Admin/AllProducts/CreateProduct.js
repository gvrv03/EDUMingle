"use client";
import React from "react";
import { useState } from "react";
import TextEditor from "../TextEditor";
import Media from "./Media";
import Pricing from "./Pricing";
import ProductOrg from "./ProductOrg";

const CreateProduct = () => {
  const [loading, setloading] = useState(false);
  const [artical, setartical] = useState("");
  const [title, settitle] = useState("")

  // Pricing
  const [price, setprice] = useState(null);
  const [compareprice, setcompareprice] = useState(null);
  const [costPerItem, setcostPerItem] = useState(null);
  const [profit, setprofit] = useState(null);
  const [margin, setmargin] = useState(null);

  return (
    <div>
      {/* -------------------------- Title -------------------------- */}
      <div className="flex justify-between border p-2 rounded-full bg-white w-full gap-5 items-center ">
        <input
          type="text"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          className="w-full  outline-none p-2 rounded-sm  px-5 "
          placeholder="Title"
        />
        <div className="flex gap-2">
          <button className="flex gap-2 p-2 outline-none  rounded-full md:px-5 bg-gray-50  items-center font-semibold text-gray-500   border ">
            <span className="text-sm hidden md:block ">Draft</span>
            <i className="uil uil-save  text-xl w-5 h-5 grid place-items-center " />
          </button>{" "}
          {!loading ? (
            <button className="flex  w-full gap-2 p-2 outline-none  rounded-full md:px-5 bg-red-600  items-center font-semibold text-white   border ">
              <span className="text-sm hidden md:block ">Publish</span>
              <i className="uil uil-forward  text-xl w-5 h-5 grid place-items-center " />
            </button>
          ) : (
            <button className="border relative grid place-items-center w-10 rounded-full bg-red-600">
              <BtnSpinnerWhite />
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 flex md:flex-row flex-col  ">
        <div className=" w-full  flex-col flex gap-5 md:w-[75%] ">
          {/* -------------------------- Description -------------------------- */}
          <div>
            <h4 className="font-semibold text-gray-500">Description</h4>
            <textarea
              rows="3"
              placeholder="Description"
              className=" p-5 rounded-md w-full border outline-none  "
            ></textarea>
          </div>

          {/* -----------------Text Editor----------------- */}
          <div>
            <h4 className="font-semibold text-gray-500">Artical</h4>

            <TextEditor
              height="30vh"
              setartical={setartical}
              artical={artical}
            />
          </div>

          {/* -----------------Pricing Components----------------- */}
          <Pricing
            setprice={setprice}
            setcompareprice={setcompareprice}
            setcostPerItem={setcostPerItem}
            setprofit={setprofit}
            setmargin={setmargin}
            margin={margin}
            profit={profit}
            price={price}
          />

          {/* -----------------Media Components----------------- */}
          <Media />
        </div>{" "}
        <div className=" w-full md:w-[25%] flex gap-5 flex-col ">
          {/* -------------------------- Status -------------------------- */}
          <div className="md:px-5">
            <h4 className="font-semibold text-gray-500">Status</h4>
            <select className=" p-2 rounded-md w-full border outline-none  ">
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          {/* -------------------------- Product Organization -------------------------- */}
          <ProductOrg />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
