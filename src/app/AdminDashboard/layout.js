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
import TopNav, { DashNav } from "@/NavItem/TopNav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AdminNavBar from "@/Components/AdminNavBar";
import NavBar from "@/Components/NavBar";
import SelectDate from "@/Components/Admin/SelectDate";
const drawerWidth = 300;

function ResponsiveDrawer({ window, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { userDetails, setSignOutState } = useAppStore();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="p-3 relative  h-full">
      <div className="    rounded-md bg-sky-100 flex gap-3 items-center w-full p-3">
        <div className="w-10 bg-white  border-gray-600 border-2  rounded-full">
          <img src={userDetails?.User?.image} className="w-full" alt="" />
        </div>
        <div className=" text-sm md:text-xs">
          <h4>Hello,</h4>
          <h2 className="font-semibold ">{userDetails?.User?.name}</h2>
          <button className=" flex items-center  mt-1 text-[10px] pColor font-semibold">
            My Account
            <i className="uil uil-angle-right-b ml-2 " />
          </button>
        </div>
      </div>

      <div className="justify-between flex-col flex gap-4  mt-5">
        <button
          className=" text-left  px-5    font-semibold bg-sky-50 py-2 pColor   flex gap-4   rounded-md "
          onClick={() => {
            router.push("/");
          }}
        >
          <i className={`uil uil-estate pColor`} />
          <span className="text-sm hover:font-semibold transition-all delay-100  ">
            {" "}
            Home
          </span>{" "}
        </button>
        {DashNav.map((text, index) => (
          <button
            className=" text-left  px-5   flex gap-4  rounded-md "
            key={index}
            onClick={() => {
              router.push(text.location);
            }}
          >
            <i className={`${text.icon}`} />
            <span className="text-sm  hover:font-semibold transition-all delay-100 ">
              {" "}
              {text.name}
            </span>{" "}
          </button>
        ))}
      </div>

      <SelectDate />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  if (userDetails.isAdmin || userDetails.isRoot) {
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
          <AdminNavBar
            handleDrawerToggle={handleDrawerToggle}
            shadow="shadow-sm"
          />
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
            px: 2,
            width: "{ sm: `calc(100% - ${drawerWidth}px)` }",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    );
  }
  return (
    <div>
      <NavBar position="fixed" />
      <div className="w-full h-screen grid place-items-center ">
        Access Denied
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
