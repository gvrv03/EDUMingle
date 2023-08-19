import React from "react";

const BalanceCard = () => {
  return (
    <div className="flex flex-col  gap-5">
      <div className="flex gap-2  border-b-2 border-gray-100 pb-5 items-center  ">
        <i className="uil uil-rupee-sign pColor bg-gray-100 w-6 h-6 text-sm p-1 grid place-items-center rounded-full" />
        <h4 className="font-semibold text-base ">Funding</h4>
      </div>{" "}
      <div className="grid grid-cols-2 gap-5">
        <div className=" flex gap-5  items-center  p-2 border border-gray-200 ">
          <div className=" bg-gray-100 rounded-full w-10 h-8  grid place-items-center  pColor">
            <i className="uil-money-withdrawal text-lg" />
          </div>
          <div className="flex flex-col w-full ">
            <h2 className="font-medium  text-sm text-gray-400">Income</h2>
            <h5 className="font-semibold flex justify-between w-full items-center">
              <span>₹ 50000</span>
              <span className="text-red-500  font-normal text-xs ">+ 14%</span>
            </h5>
          </div>
        </div>

        <div className=" flex gap-5  items-center  p-2 border border-gray-200 ">
          <div className=" bg-gray-100 rounded-full w-10 h-8  grid place-items-center  pColor">
            <i className="uil uil-bell text-lg" />
          </div>
          <div className="flex flex-col w-full ">
            <h2 className="font-medium  text-sm text-gray-400">Expense</h2>
            <h5 className="font-semibold flex justify-between w-full items-center">
              <span>₹ 50000</span>
              <span className="text-red-500  font-normal text-xs ">+ 14%</span>
            </h5>
          </div>
        </div>

        <div className=" flex gap-5  items-center  p-2 border border-gray-200 ">
          <div className=" bg-gray-100 rounded-full w-10 h-8  grid place-items-center  pColor">
            <i className="uil uil-bell text-lg" />
          </div>
          <div className="flex flex-col w-full ">
            <h2 className="font-medium  text-sm text-gray-400">Spending</h2>
            <h5 className="font-semibold flex justify-between w-full items-center">
              <span>₹ 50000</span>
              <span className="text-red-500  font-normal text-xs ">+ 14%</span>
            </h5>
          </div>
        </div>

        <div className=" flex gap-5  items-center  p-2 border border-gray-200 ">
          <div className=" bg-gray-100 rounded-full w-10 h-8  grid place-items-center  pColor">
            <i className="uil uil-bell text-lg" />
          </div>
          <div className="flex flex-col w-full ">
            <h2 className="font-medium  text-sm text-gray-400">
              Available Balance
            </h2>
            <h5 className="font-semibold flex justify-between w-full items-center">
              <span>₹ 50000</span>
              <span className="text-red-500  font-normal text-xs ">+ 14%</span>
            </h5>
          </div>
        </div>
      </div>

      
      <div className=" flex gap-5  items-center  p-2 border border-gray-200 ">
        <div className=" bg-gray-100 rounded-full w-10 h-8  grid place-items-center  pColor">
          <i className="uil uil-bell text-lg" />
        </div>
        <div className="flex flex-col w-full ">
          <h2 className="font-medium  text-sm text-gray-400">Total</h2>
          <h5 className="font-semibold flex justify-between w-full items-center">
            <span>₹ 50000</span>
            <span className="text-red-500  font-normal text-xs ">+ 14%</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
