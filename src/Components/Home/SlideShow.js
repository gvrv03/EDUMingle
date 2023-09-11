"use client";
import React, { memo, useRef } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const slideRef = useRef();
  return (
    <div className="bg-white  p-5">
      <Slide indicators={true} arrows={false} ref={slideRef}>
        <div className=" rounded-md">
          <img
            className="w-full md:h-full rounded-md h-52"
            src="/Slideshow/slide1.svg"
            alt=""
          />
        </div>
        <div className=" rounded-md">
          <img
            className="w-full md:h-full rounded-md h-52"
            src="  https://img.ebonow.com/Posters/P1F.webp"
            alt=""
          />
        </div>
        <div className=" rounded-md">
          <img
            className="w-full md:h-full rounded-md h-52"
            src="  https://img.ebonow.com/Posters/P1A.webp"
            alt=""
          />
        </div>
      </Slide>
    </div>
  );
};

export default memo(SlideShow);
