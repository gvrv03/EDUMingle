"use client";
import React, { memo, useRef } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ProductSlideShow = ({ images, thumbnail }) => {
  const slideRef = useRef();
  console.log(images);
  return (
    <div className="bg-white  w-96  ">
      <Slide indicators={true} arrows={false} ref={slideRef}>
        <div className="h-full   w-full md:w-96 rounded-md">
          <img className="  rounded-md " src={thumbnail} alt="" />
        </div>
        {images?.map((image, index) => {
          return (
            <div key={index} className="h-full   w-full md:w-96 rounded-md">
              <img className="  rounded-md " src={image} alt="" />
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default memo(ProductSlideShow);
