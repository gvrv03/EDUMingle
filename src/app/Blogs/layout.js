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
import MostPopBlogs from "@/Components/BlogComp/MostPopBlogs";
import BlogCategory from "@/Components/BlogComp/BlogCategory";
import { Suspense } from "react";
const drawerWidth = 300;

function ResponsiveDrawer({ window, children }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <div className="p-5 flex-col flex gap-5">
        <Suspense fallback={<div>Loading...</div>}>
          <MostPopBlogs />
          <BlogCategory />
        </Suspense>
      </div>
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
        <div className=" p-5 bg-white flex-col flex gap-5 md:hidden">
          <MostPopBlogs />
          <BlogCategory />
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
