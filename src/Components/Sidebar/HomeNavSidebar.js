import { useAppStore } from "@/Context/UseStoreContext";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { Divider, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const HomeNavSidebar = () => {
  const { userDetails, setSignOutState } = useAppStore();
  const router = useRouter();

  return (
    <div>
      {userDetails?.isLogin ? (
        <div className="flex justify-between w-full p-5 bg-blue-900 text-white ">
          {" "}
          <button
            onClick={() => {
              if (userDetails?.isLogin) {
                return router.push("/MyAccount");
              }
              return setsignInModal(true);
            }}
            className="flex items-center gap-4     "
          >
            <img
              src={userDetails?.User?.image}
              className="w-8 border rounded-full"
              alt={userDetails?.User?.name}
            />
            <span className="">Hey, {userDetails?.User?.name} </span>
          </button>
          <IconButton
            color="inherit"
            onClick={() => {
              setSignOutState(true);
            }}
          >
            <i className=" text-xl     w-5 grid place-items-center h-5  text-white uil uil-signout   " />
          </IconButton>
        </div>
      ) : (
        <button className="w-full p-5 flex items-center gap-4   bg-blue-900 text-white  ">
          <i className="uil uil-user" /> <span className="">Sign In</span>
        </button>
      )}
      <div className=" px-5  ">
        {TopNav.map((text, index) => (
          <button
            className=" text-left  py-2 flex gap-5 w-full"
            key={index}
            onClick={() => {
              router.push(text.location);
            }}
          >
            <i className={`${text.icon}`} />
            <span>{text.name}</span>{" "}
          </button>
        ))}

        <Divider sx={{ margin: "10px 0 " }} />

        {Legal.map((text, index) => (
          <button
            className=" text-left    py-2 flex gap-5 w-full"
            key={index}
            onClick={() => {
              router.push(text.location);
            }}
          >
            <i className={`${text.icon}`} />
            <span>{text.name}</span>{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeNavSidebar;
