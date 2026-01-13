import { useState, useContext } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  align-items: center; /* Center vertically */
  position: relative;
  top: 0px; /* Adjusted position to align with the cart */

  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  background: ${(props) => (props.firstname ? "#2874f0" : "#ffffff")};
  color: ${(props) => (props.firstname ? "#ffffff" : "#2874f0")};
  border-radius: 2px;
  text-transform: none;
  padding: 5px 40px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const { account } = useContext(DataContext);

  return (

    <Wrapper>
        {
            account ? <Profile  account ={account} /> :
        
      <LoginButton
        firstname={account && account.firstname}
        onClick={() => setOpen(true)}
      >
        {account && account.firstname ? account.firstname : "Login"}
      </LoginButton>
}
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
