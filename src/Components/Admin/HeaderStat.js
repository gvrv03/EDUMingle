"use client";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import React, { useEffect } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LoopIcon from "@mui/icons-material/Loop";
import { IconButton } from "@mui/material";
import { BtnSpinner } from "../LoadingSpinner";
import PhoneIcon from "@mui/icons-material/Phone";
import { useAppStore } from "@/Context/UseStoreContext";
const HeaderStat = () => {
  const { userDetails } = useAppStore();

  const StatHeader = ({ blogs, users, products, contact }) => {
    const HeaderCard = ({ name, value, icon, loading }) => {
      return (
        <div className="">
          <div className="  px-5 py-5 bg-gray-50 flex gap-5 relative justify-center items-center  rounded-sm">
            {icon}
            <div className=" ">
              <div className="flex gap-5">
                <h2 className="title-font   font-semibold  text-xl ">{value}</h2>
                {loading && <BtnSpinner />}
              </div>

              <p className="leading-relaxed text-sm ">{name}</p>
            </div>
          </div>
        </div>
      );
    };
    return (
      <section className="text-gray-600 body-font ">
        <div className="   mx-auto">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-6 ">
            <HeaderCard
              name="Blogs"
              value="500"
              loading={false}
              icon={<NewspaperIcon className="pColor text-3xl" />}
            />
            <HeaderCard
              name="Users"
              value="200"
              loading={false}
              icon={<SupervisorAccountIcon className="pColor text-3xl" />}
            />

            <HeaderCard
              name="Contacts"
              value="400"
              loading={false}
              icon={<SupervisorAccountIcon className="pColor text-3xl" />}
            />    
            <HeaderCard
              name="Feedbacks"
              value="400"
              loading={false}
              icon={<SupervisorAccountIcon className="pColor text-3xl" />}
            />
            <HeaderCard
              name="Products"
              value="300"
              loading={false}
              icon={<ShoppingBagIcon className="pColor text-3xl" />}
            />
            <HeaderCard
              name="Works"
              value="100"
              loading={false}
              icon={<PhoneIcon className="pColor text-3xl" />}
            />
          </div>
        </div>
      </section>
    );
  };
  return (
    <div>
      <div className=" w-full  bg-white p-5 ">
        {" "}
        <div className=" justify-between items-center  rounded-full  flex mb-5">
          <div className="bg-gray-100  font-bold px-10 py-2 rounded-full ">
            Hello! <span className="pColor">{userDetails?.User?.name}</span>
          </div>

          <div className="rounded-full   flex gap-5 justify-center items-center bg-gray-100   overflow-hidden p-1 w-auto">
            <IconButton aria-label="LoopIcon"  size="small">
              <LoopIcon className="text-2xl  " />
            </IconButton>
            <img
              className="w-6 h-6 rounded-full"
              src={userDetails?.User?.image}
              alt={userDetails?.User?.name}
            />
          </div>
        </div>
        <StatHeader
        // blogs={blogs}
        // users={users}
        // contact={contact}
        // products={products}
        />
      </div>
    </div>
  );
};

export default HeaderStat;
