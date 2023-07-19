import React, { memo } from "react";

const Category = () => {
  return (
    <div className="flex gap-5 w-full  no-scrollbar md:justify-center items-center overflow-x-scroll p-5 bg-white ">
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/50379f65f7b59622.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7b2a4eeb35a8c9f.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/da4491af4ee551d6.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7b2a4eeb35a8c9f.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7b2a4eeb35a8c9f.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7b2a4eeb35a8c9f.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7b2a4eeb35a8c9f.png?q=100" />
      <CardCircle image="https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f7b2a4eeb35a8c9f.png?q=100" />
    </div>
  );
};

const CardCircle = ({ image }) => {
  return (
    <div className="flex  flex-col items-center justify-center   w-32  md:w-20   gap-2">
      <img src={image}  alt="img" />
      <p className="font-semibold">Offer</p>
    </div>
  );
};

export default memo(Category);
