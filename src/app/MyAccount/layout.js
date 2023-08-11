"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useAppStore } from "@/Context/UseStoreContext";
import { DashNav } from "@/NavItem/TopNav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavigationMyAcc from "@/Components/MyAccount/NavigationMyAcc";
import HomeNavSidebar from "@/Components/Sidebar/HomeNavSidebar";
import NavBar from "@/Components/NavBar";
const drawerWidth = 300;

function ResponsiveDrawer({ window, children }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userDetails, setSignOutState, setsignInModal } = useAppStore();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className="bg-sky-50 flex gap-5 w-full p-5">
        <div className="w-10 bg-white rounded-full h-10 grid place-items-center ">
          <img src={userDetails?.User?.image} className="w-full" alt="" />
        </div>
        <div>
          <h4>Hello,</h4>
          <h2 className="font-semibold text-base">{userDetails?.User?.name}</h2>
        </div>
      </div>

      <div className="w-full bg-white ">
        <NavigationMyAcc />
      </div>

      <div className=" w-full bg-white grid place-items-center gap-5 p-5">
        <button
          onClick={() => {
            setSignOutState(true);
          }}
          className="pBtn w-full py-3 "
        >
          Log Out
        </button>
      </div>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (userDetails?.isLogin) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="inherit"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            boxShadow: "none",
          }}
        >
          <NavBar position="relative" />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
            <Toolbar />
          {children}
        </Box>
      </Box>
    );
  }

  return <div>You Need To Sign In</div>;
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
