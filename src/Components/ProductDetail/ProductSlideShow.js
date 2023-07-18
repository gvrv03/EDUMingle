"use client";
import React, { memo, useRef } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ProductSlideShow = () => {
  const slideRef = useRef();
  return (
    <div className="bg-white  w-96  ">
      <Slide indicators={true} arrows={false} ref={slideRef}>
        <div className="h-96   w-full md:w-96 rounded-md">
          <img
            className="  rounded-md "
            src="  https://m.media-amazon.com/images/I/71qjUzUt+ML._SX679_.jpg"
            alt=""
          />
        </div>
        <div className="h-96   w-full md:w-96 rounded-md">
          <img
            className="  rounded-md "
            src="https://m.media-amazon.com/images/I/51iv-60kraL._SX679_.jpg"
            alt=""
          />
        </div>
        <div className="h-96   w-full md:w-96 rounded-md">
          <img
            className="  rounded-md "
            src="  https://m.media-amazon.com/images/I/51yteiP577L._SX679_.jpg"
            alt=""
          />
        </div>
      </Slide>
    </div>
  );
};

export default memo(ProductSlideShow);
