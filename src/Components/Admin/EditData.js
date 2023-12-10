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

  const settings = ["Update", "View", "Delete", "Send Mail"];
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
        sx={{ mt: "45px" }}
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
        {settings.map((setting) => (
          //   <MenuItem key={setting} onClick={handleCloseUserMenu}>

          //     <Typography  fontSize="12px" textAlign="center">{setting}</Typography>
          //   </MenuItem>
          <button
            className="px-2 flex gap-2 "
            type="button"
            key={setting}
            onClick={handleCloseUserMenu}
          >
            <i className="uil uil-sync" />
            {setting}
          </button>
        ))}
      </Menu>
    </Box>
  );
};

export default EditData;
