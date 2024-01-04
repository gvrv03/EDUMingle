import React from "react";

const ProductOrg = ({
  setcategory,
  setproducttype,
  setcollection,
  setkeywords,
  status,
  setstatus,
}) => {
  return (
    <div className="md:px-5">
      {" "}
      <label className="font-semibold text-gray-500">
        Product Organization
      </label>
      <div className="flex gap-2 flex-col ">
        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">Status</h5>
          <select
            onChange={(e) => {
              setstatus(e.target.value);
            }}
            value={status}
            className=" p-2 rounded-md w-full border outline-none  "
          >
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">
            Product Category
          </h5>
          <input
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">
            Product Type
          </h5>
          <input
            onChange={(e) => {
              setproducttype(e.target.value);
            }}
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">Collection</h5>
          <input
            onChange={(e) => {
              setcollection(e.target.value);
            }}
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>

        <div>
          <h5 className="font-medium py-1 text-sm text-gray-500">Keywords</h5>
          <input
            onChange={(e) => {
              setkeywords(e.target.value);
            }}
            type="text"
            className=" p-2 rounded-md w-full border outline-none  "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductOrg;
