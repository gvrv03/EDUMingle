"use client";
import { BtnSpinnerWhite } from "@/Components/LoadingSpinner";
import { useProduct } from "@/Context/UseProductContext";
import { useAppStore } from "@/Context/UseStoreContext";
import React from "react";
import { useState } from "react";
import TextEditor from "../TextEditor";
import Media from "./Media";
import Pricing from "./Pricing";
import ProductOrg from "./ProductOrg";

const CreateProduct = () => {
  const { createProduct } = useProduct();
  const { userDetails } = useAppStore();
  const [loading, setloading] = useState(false);
  const [artical, setartical] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // Pricing
  const [price, setprice] = useState(null);
  const [compareprice, setcompareprice] = useState(null);
  const [costPerItem, setcostPerItem] = useState(null);
  const [profit, setprofit] = useState(null);
  const [margin, setmargin] = useState(null);
  //Files
  const [thumbnail, setthumbnail] = useState("");
  const [images, setimages] = useState([]);
  const [file, setFile] = useState(null);
  //Product Organization
  const [status, setstatus] = useState("active");
  const [category, setcategory] = useState("");
  const [producttype, setproducttype] = useState("");
  const [collection, setcollection] = useState("");
  const [keywords, setkeywords] = useState("");
  const handleAddProduct = async () => {
    setloading(true);

    
    await createProduct({
      productDetail: {
        addeBy: userDetails?.User?._id,
        title,
        description,
        status: status,
        artical,
        images: images?.urls,
        thumbnail: thumbnail?.url,
        productOrganization: {
          category: category,
          type: producttype,
          collection: collection,
          keywords: keywords,
        },
        pricing: {
          price,
          comAtPrice: compareprice,
          costPerItem,
          profit,
          margin,
        },
        status: "active",
        rating: 2,
      },
      product: {
        Name: title,
        Product: file?.url,
        date: Date.now,
      },
    });
    setloading(false);
  };
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
            <button
              onClick={handleAddProduct}
              className="flex  w-full gap-2 p-2 outline-none  rounded-full md:px-5 bg-red-600  items-center font-semibold text-white   border "
            >
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
            <label className="font-semibold  text-gray-500">
              <i className="uil font-bold pColor rounded-full mr-2  uil-paragraph" />
              Description
            </label>

            <textarea
              rows="3"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              placeholder="Description"
              className=" p-5  mt-2 rounded-md w-full border outline-none  "
            ></textarea>
          </div>

          {/* -----------------Text Editor----------------- */}
          <div>
            <label className="  font-semibold text-gray-500">
              <i className="uil font-bold pColor rounded-full mr-2  uil-document-layout-left" />
              Artical
            </label>

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
          <Media
            setthumbnail={setthumbnail}
            title={title}
            thumbnail={thumbnail}
            images={images}
            setimages={setimages}
            setFile={setFile}
          />
        </div>{" "}
        <div className=" w-full md:w-[25%] flex gap-5 flex-col ">
          {/* -------------------------- Product Organization -------------------------- */}
          <ProductOrg
            setcategory={setcategory}
            setproducttype={setproducttype}
            setcollection={setcollection}
            setkeywords={setkeywords}
            status={status}
            setstatus={setstatus}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
