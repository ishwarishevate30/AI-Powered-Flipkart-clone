import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";


const Logout = styled(Typography)`
  font-size: 14px;
  
`
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
        <MenuItem onClick={handleSignOut}>
          <PowerSettingsNewIcon color="primary" fontSize="small" style={{ marginRight: 8 }} />
       <Logout>Logout</Logout>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;