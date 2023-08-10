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
const drawerWidth = 350;

function ResponsiveDrawer({ window, children }) {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userDetails, setSignOutState, setsignInModal } = useAppStore();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div className="hidden md:block">
        

        Hey 
      </div>
      <div className="md:hidden block">
        <HomeNavSidebar />
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex items-center justify-between w-full">
            <div className="font-semibold">WebEase</div>
            <div className="flex gap-3">
              <form className="w-[100%]    flex items-center px-2 border  rounded ">
                <input
                  type="search"
                  className="w-full bg-transparent outline-none  text-xs p-2"
                  placeholder="Search..."
                />

                <button>
                  <i className="uil uil-search pColor text-lg" />
                </button>
              </form>
              <IconButton color="inherit">
                <i className=" text-xl  w-5 grid place-items-center h-5 pColor   uil uil-shopping-cart" />
              </IconButton>{" "}
              <IconButton
                color="inherit"
                onClick={() => {
                  if (userDetails?.isLogin) {
                    return router.push("/MyAccount");
                  }
                  return setsignInModal(true);
                }}
              >
                <i
                  className={`uil  text-xl  w-5 grid place-items-center h-5 pColor pColor ${
                    userDetails?.isLogin
                      ? "uil-user-check   "
                      : "uil-user"
                  } `}
                />
              </IconButton>
            </div>
          </div>
        </Toolbar>
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
        {children}
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
