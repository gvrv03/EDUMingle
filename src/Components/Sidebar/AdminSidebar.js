import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import AdminNavBar from "../AdminNavBar";
import AdminNavSidebar from "./AdminNavSidebar";
const AdminSidebar = ({barIcon}) => {
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
      <AdminNavSidebar />
    </aside>
  );
  return (
    <>
      <button onClick={toggleDrawer("left", true)}>
        <i className={`${barIcon} pColor u grid place-items-center `}/>
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
export default React.memo(AdminSidebar);
