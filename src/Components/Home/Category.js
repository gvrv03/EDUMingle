import React, { memo } from "react";

const Category = () => {
  return (
    <div className="bg-white justify-center items-center  overflow-scroll no-scrollbar   flex flex-row gap-5 p-5 rounded-md">
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
    <div className="grid place-items-center gap-2">
      <img src={image} className="w-20" />
      <p className="font-semibold">Offer</p>
    </div>
  );
};

export default memo(Category);
