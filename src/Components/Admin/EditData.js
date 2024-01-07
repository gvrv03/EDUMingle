"use client";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const EditData = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const settings = [
    { icon: "uil  text-[12px] uil-edit-alt", name: "Update" },
    { icon: "uil  text-[12px] uil-eye", name: "View" },
    { icon: "uil  text-[12px] uil-trash-alt", name: "Delete" },
    { icon: "uil text-[12px] uil-message text-blue-500 font-semibold mx-2 mt-2 p-1 text-[9px] rounded-full  bg-blue-50 ", name: "Send Mail" },
  ];
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} aria-label="select">
          <MoreVertIcon />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px", padding: "10px  " }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting, index) => (
          <button
            className={` ${setting.icon}  items-center mb-[3px] hover:text-black text-gray-500 hover:font-semibold   px-2 flex gap-2 `}
            type="button"
            key={index}
            onClick={handleCloseUserMenu}
          >
            {setting.name}
          </button>
        ))}
      </Menu>
    </Box>
  );
};

export default EditData;
