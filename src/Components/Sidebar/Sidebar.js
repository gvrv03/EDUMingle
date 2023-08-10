import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { useAppStore } from "@/Context/UseStoreContext";
import { IconButton } from "@mui/material";
import HomeNavSidebar from "./HomeNavSidebar";
const Sidebar = () => {
  const router = useRouter();
  const { userDetails, setSignOutState } = useAppStore();

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
     <HomeNavSidebar/>
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
