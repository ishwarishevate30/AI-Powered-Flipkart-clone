import { Typography, Box, Menu, MenuItem } from "@mui/material";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";

const Profile = ({ account }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setAccount } = useContext(DataContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAccount(null); // Clear the account state
    handleClose();
  };

  return (
    <Box>
      <Typography
        style={{ marginTop: 2, cursor: "pointer" }}
        onClick={handleClick}
      >
        {account.firstname}
      </Typography>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;