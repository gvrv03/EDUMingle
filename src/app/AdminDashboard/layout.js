"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useAppStore } from "@/Context/UseStoreContext";
import { DashNav } from "@/NavItem/TopNav";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AdminNavBar from "@/Components/AdminNavBar";
import NavBar from "@/Components/NavBar";
import SelectDate from "@/Components/Admin/SelectDate";
const drawerWidth = 300;

function ResponsiveDrawer({ window, children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const { userDetails } = useAppStore();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <div className="px-3 relative  h-full">
        <div className="justify-between flex-col flex gap-4  mt-5">
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
    </>
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
            width: "100%",
            ml: { sm: `${drawerWidth}px` },
            boxShadow: "none",
          }}
          className="z-20"
        >
          <AdminNavBar shadow="border-b shadow-sm " />
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
          className="z-10"
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
            // background:"red",
            flexGrow: 1,
            width: "{ sm: `calc(100% - ${drawerWidth}px)` }",
          }}
          className="px-0 -mt-2"
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
  window: PropTypes.func,
};

export default ResponsiveDrawer;
