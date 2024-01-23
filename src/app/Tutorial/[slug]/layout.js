"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import NavBar from "@/Components/NavBar";
import SidebarTut from "@/Components/Tutorial/SidebarTut";
import SubTitSidebar from "@/Components/Sidebar/SubTitSidebar";
const drawerWidth = 300;

function ResponsiveDrawer({ window, children, params }) {
  const [loading, setloading] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [subTitles, setsubTitles] = useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
     
      <SidebarTut
        ID={params?.slug}
        loading={loading}
        setloading={setloading}
        subTitles={subTitles}
        setsubTitles={setsubTitles}
      />
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        className="md:border-b z-20 "
      >
        <NavBar position="relative" />
      </AppBar>
      <Box
        component="nav"
        className="z-10"
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
        <div className="fixed md:hidden  top-12 w-[100%] bg-white p-5">
          <SubTitSidebar
            Data={subTitles}
            ID={params?.slug}
            loading={loading}
            setloading={setloading}
          />
        </div>
      </Box>
    </Box>
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
