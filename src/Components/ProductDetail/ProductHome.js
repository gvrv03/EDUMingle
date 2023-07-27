import React from "react";
import PaymentInititate from "../Payment/PaymentInititate";
import ProductSlideShow from "./ProductSlideShow";

const ProductHome = ({ product }) => {
  const {
    title,
    artical,
    views,
    thumbnail,
    images,
    pricing,
    productOrganization,
    description,
    addeBy,
    _id,
    productID,
  } = product ? product : {};
  return (
    <div className="w-full items-center   bg-white p-5 flex-col md:flex-row flex gap-5">
      <div className="">
        <ProductSlideShow thumbnail={thumbnail} images={images} />
      </div>

      <div className="w-full flex-col flex gap-5   bg-white">
        <div className="border-b pb-2 flex-col flex gap-2 ">
          <h1 className="font-semibold  text-xl text-justify ">{title}</h1>
          <h4 className="font-medium text-gray-500">Category: Frame</h4>
        </div>

        <div className=" pb-2 flex-col flex gap-2 ">
          <div>
            <span className="text-gray-400 text-2xl  md:text-3xl">-50% </span>{" "}
            <span className="font-semibold text-2xl  md:text-3xl">₹399</span>
          </div>
          <div className="text-gray-400 ">
            M.R.P : <strike>₹799</strike>{" "}
          </div>
          <div>Inclusive of all taxes</div>
        </div>

        <div className="border p-5  rounded-md flex-col flex gap-2 ">
          <div className="pColor font-medium">
            Free delivery{" "}
            <span className="text-black font-bold">Monday, 31 July.</span>
          </div>
          <div className="pColor font-medium">
            {" "}
            <i className="uil uil-map-marker-alt text-lg" />{" "}
            <span>Free delivery</span>{" "}
            <span className="text-black font-bold">445301 </span>{" "}
            <button className="pBtn p-1  px-2 rounded-md">change</button>
          </div>
        </div>

        <div className="   rounded-md flex-col flex gap-2 ">
          <span className=" flex items-center gap-2 ">
            <div className="font-bold">Size:</div>
            <div className="flex gap-2">
              <button className="border p-1 px-3"> 15 inc </button>
              <button className="border p-1 px-3"> 20 inc </button>
            </div>
          </span>
        </div>

        <div className="flex gap-10 justify-center  flex-col md:flex-row bg-sky-50 rounded-md p-5 ">
          <div className="flex gap-5 w-full">
            <div className="flex-col items-center justify-center flex">
              <img
                className="w-14"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
              />
              <span>Free Delivery</span>
            </div>

            <div className="flex-col items-center justify-center flex">
              <img
                className="w-14"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
              />
              <span>10 days Returnable</span>
            </div>

            <div className="flex-col items-center justify-center flex">
              <img
                className="w-14"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
              />
              <span>E-shop Deliverd</span>
            </div>

            <div className="flex-col items-center justify-center flex">
              <img
                className="w-14"
                src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"
              />
              <span>Secure Transcation</span>
            </div>
          </div>

          <div className="flex-col w-full items-center gap-2 justify-center flex">
            <button className="w-full rounded-full bg-yellow-400 py-3 font-semibold">
              Add to Cart
            </button>
            <PaymentInititate
              title={title}
              amount={pricing?.price}
              produDID={productID}
              productDetailID={_id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHome;
