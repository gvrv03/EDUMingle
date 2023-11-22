import React from "react";

const Catlog = () => {
  return (
    <div>
      <SingleDetail />
    </div>
  );
};

export default Catlog;

const SingleDetail = () => {
  return (
    <section className="text-gray-600 bg-white p-5 ">
      <div className="grid md:grid-cols-4  place-items-center grid-cols-2 gap-5 text-center">
        <CatlogCard noOf="25k" title="University" />
        <CatlogCard noOf="25k" title="Colleges" />
        <CatlogCard noOf="25k" title="Courses" />
        <CatlogCard noOf="25k" title="Study Material" />
      </div>
    </section>
  );
};

const CatlogCard = ({ title }) => {
  return (
    <section className=" flex bg-sky-50 w-full rounded-md  justify-center items-center   p-5 ">
      <div className=" flex gap-5 items-center w-[70%] md:w-[40%] " >
        <i className="uil  text-xl text-blue-700 uil-bell" />
        <div className="flex flex-col ">
          <div className="font-semibold   text-left text-base">25k+</div>
          <div className="" >{title}</div>
        </div>
      </div>
    </section>
  );
};
