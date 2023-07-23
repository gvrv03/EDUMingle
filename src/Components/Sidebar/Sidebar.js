import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { useUserAuth } from "@/Context/UserAuthContext";
const Sidebar = () => {
  const router = useRouter();
  const { userDetails, signOut } = useUserAuth();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <aside
      className="w-[300px]  "
      onKeyDown={toggleDrawer(anchor, false)}
      onClick={toggleDrawer(anchor, false)}
    >
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
            <img src= {userDetails?.User?.image} className="w-8 border rounded-full"   alt= {userDetails?.User?.name} />
            <span className="">Hey, {userDetails?.User?.name} </span>
          </button>
          <button onClick={signOut}>
            <i className="uil uil-sign-out-alt text-xl" />
          </button>
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
    </aside>
  );
  return (
    <>
      <button onClick={toggleDrawer("left", true)}>
        <i className="uil uil-bars  text-xl" />
      </button>

      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </>
  );
};
export default React.memo(Sidebar);
