import React from "react";

const ProductOrg = () => {
  return (
    <div className="md:px-5">
      <h4 className="font-semibold text-gray-500">Product Organization</h4>

      <div className="flex gap-2 flex-col ">
        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">
            Product Category
          </h5>
          <select className=" p-2 rounded-md w-full border outline-none  ">
            <option value="Ebook">Ebook</option>
            <option value="Blog">Blog</option>
          </select>
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">
            Product Type
          </h5>
          <input
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">Collection</h5>
          <input
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">Keywords</h5>
          <input
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOrg;
