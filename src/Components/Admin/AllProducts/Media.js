import React from "react";

const Media = () => {
  return (
    <div className="flex w-full gap-5 flex-col md:flex-row" >
      <div className="  flex flex-col gap-2 w-full" >
        <h5 className="font-semibold text-gray-500 " >Thumbnail</h5>
        <input
          type="file"
          draggable
          className=" text-transparent    w-full file:bg-white   file:text-red-400 file:cursor-pointer file:border file:outline-none file:font-semibold file:rounded-full file:w-full file:border-dashed file:border-gray-300 file:px-5 file:py-2 file:mr-2 cursor-pointer "
          // onChange={handleFileChange}
        />
      </div>
      <div className="  flex flex-col gap-2 w-full" >
        <h5 className="font-semibold text-gray-500 " >Images</h5>
        <input
          type="file"
          draggable
          className=" text-transparent    w-full file:bg-white   file:text-red-400 file:cursor-pointer file:border file:outline-none file:font-semibold file:rounded-full file:w-full file:border-dashed file:border-gray-300 file:px-5 file:py-2 file:mr-2 cursor-pointer "
          // onChange={handleFileChange}
        />
      </div>
      <div className="  flex flex-col gap-2 w-full" >
        <h5 className="font-semibold text-gray-500 " >Product</h5>
        <input
          type="file"
          draggable
          className=" text-transparent    w-full file:bg-white   file:text-red-400 file:cursor-pointer file:border file:outline-none file:font-semibold file:rounded-full file:w-full file:border-dashed file:border-gray-300 file:px-5 file:py-2 file:mr-2 cursor-pointer "
          // onChange={handleFileChange}
        />
      </div>{" "}
    </div>
  );
};

export default Media;
