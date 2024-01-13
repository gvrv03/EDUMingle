import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SidebarTut from "../Tutorial/SidebarTut";
import SubTitNav from "./SubTitNav";
const SubTitSidebar = ({ Data, ID, loading, setloading }) => {
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
      <SubTitNav
        Data={Data}
        ID={ID}
        loading={loading}
        setloading={setloading}
      />
    </aside>
  );
  return (
    <>
      <button
        className="flex gap-2 items-center font-semibold"
        onClick={toggleDrawer("left", true)}
      >
        <i className="uil uil-apps pColor u grid place-items-center text-2xl" />
        <p>Topic</p>
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
export default React.memo(SubTitSidebar);
