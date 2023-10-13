import React from "react";

const LatestOrder = () => {
  return (
    <div className="flex flex-col  gap-5">
      <div className="flex gap-2  border-b-2 border-gray-100 pb-5 items-center  ">
        <i className="uil uil-shopping-cart pColor bg-gray-100 w-6 h-6 text-sm p-1 grid place-items-center rounded-full" />
        <h4 className="font-semibold text-base ">Latest Order</h4>
      </div>{" "}
      <div className="grid grid-cols-1  overflow-scroll w-full gap-5">
        <table  >
          <thead className="text-xs rounded-md bg-gray-50 p-5" >
            <th className=" px-2 text-left  py-2" >ID</th>
            <th className="text-left  py-2" >Name</th>
            <th className="text-left  py-2" >Email</th>
            <th className="text-left  py-2" >Cost</th>
            <th className="text-left  py-2" >Status</th>
            <th className="text-left  py-2" >Edit</th>
          </thead>
          <tbody className="   text-xs " >
            <tr   >
              <td className="py-3 px-2 border-b my-2"  >2003</td>
              <td className="font-semibold border-b ">Gaurav Narnaware</td>
              <td className="py-3 px-2 border-b my-2"  >garavnarnawre31212003@gmail.com</td>
              <td className="py-3 px-2 border-b my-2"  >₹500</td>
              <td className=" border-b p-1  rounded-full text-[10px] font-semibold text-center text-orange-400">
                In Progress
              </td>
              <td className="uil uil-ellipsis-h" ></td>

            </tr>
            <tr >
              <td className="py-3 px-2 border-b my-2"  >2003</td>
              <td className="font-semibold border-b ">Gaurav Narnaware</td>
              <td className="py-3 px-2 border-b my-2"  >garavnarnawre31212003@gmail.com</td>
              <td className="py-3 px-2 border-b my-2"  >₹500</td>
              <td className=" border-b p-1  rounded-full text-[10px] font-semibold text-center text-orange-400">
                In Progress
              </td>
              <td className="uil uil-ellipsis-h" ></td>

            </tr>
            <tr >
              <td className="py-3 px-2 border-b my-2"  >2003</td>
              <td className="font-semibold border-b ">Gaurav</td>
              <td className="py-3 px-2 border-b my-2"  >garavnarnawre31212003@gmail.com</td>
              <td className="py-3 px-2 border-b my-2"  >₹500</td>
              <td className=" border-b p-1  rounded-full text-[10px] font-semibold text-center text-orange-400">
                In Progress
              </td>
              <td className="uil uil-ellipsis-h" ></td>

            </tr>
            <tr >
              <td className="py-3 px-2 border-b my-2"  >2003</td>
              <td className="font-semibold border-b ">Gaurav Narnaware</td>
              <td className="py-3 px-2 border-b my-2"  >garavnarnawre31212003@gmail.com</td>
              <td className="py-3 px-2 border-b my-2"  >₹500</td>
              <td className=" border-b p-1  rounded-full text-[10px] font-semibold text-center text-orange-400">
                In Progress
              </td>
              <td className="uil uil-ellipsis-h" ></td>

            </tr>
            <tr >
              <td className="py-3 px-2 border-b my-2"  >2003</td>
              <td className="font-semibold border-b ">Gaurav Narnaware</td>
              <td className="py-3 px-2 border-b my-2"  >garavnarnawre31212003@gmail.com</td>
              <td className="py-3 px-2 border-b my-2"  >₹500</td>
              <td className=" border-b p-1  rounded-full text-[10px] font-semibold text-center text-orange-400">
                Completed
              </td>
              <td className="uil uil-ellipsis-h" ></td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestOrder;
