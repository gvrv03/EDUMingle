"use client";
import React, { memo, useRef } from "react";
import { Slide, SlideshowRef } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const slideRef = useRef();
  return (
    <div className="bg-white  p-5">
      <Slide indicators={true} arrows={false} ref={slideRef}>
        <div className=" relative bg-[#331564]  h-[180px] md:h-[500px]  md:p-10 p-5 rounded-md">
          <svg
            className="md:w-[456px] md:h-[63px] w-[150px] "
            viewBox="0 0 456 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0302734 0.496094H395.086L360.62 62.2812H0.0302734V0.496094Z"
              fill="#CFD1FE"
            />
            <path
              d="M403.379 0.496094L431.49 0.496672L414.868 33.0547H387.28L403.379 0.496094Z"
              fill="#CFD1FE"
            />
            <path
              d="M439.676 0.496094L455.253 0.496429L446.042 19.373H430.754L439.676 0.496094Z"
              fill="#CFD1FE"
            />
          </svg>

          <div className="mt-5 md:mt-10 flex-col flex   gap-1  md:gap-8">
            <h1 className="text-white font-semibold text-sm md:text-7xl">
              Release the potential of the brand.
            </h1>
            <h5 className="text-white   text-[10px] md:text-4xl  ">
              Get web solutions that add value to your business
            </h5>
          </div>
          <button className="bg-[#CFD1FE]  text-xs md:text-xl md:px-10 md:py-3 px-5 py-2 rounded-full absolute  md:bottom-10 md:left-10 bottom-5 left-5 text-black font-semibold">
            Know More
          </button>

          <img
            className="absolute right-5  md:right-10 md:top-10 top-5 h-[80%]"
            src="/Slideshow/Slide1Img.svg"
            alt=""
            srcSet=""
          />
        </div>

        {/* <div className="  bg-[#331564]  h-[190px] md:h-[500px] rounded-md">
          
        </div> */}
      </Slide>
    </div>
  );
};

export default memo(SlideShow);
