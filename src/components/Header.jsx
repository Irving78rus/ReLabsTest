import React from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
const Auth = styled.div`
 
linear-gradient(1.09deg, #7e6af3 0.86%, #6540cd 99.01%);
background-repeat: no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
`;
export default function Header() {
  const navItems = ["Auth", "Shop"];
  return (
    <AppBar sx={{ position: "static" }}>
      <Box>
        <Link to="/">
          <Button sx={{ color: "#fff" }}>Home</Button>
        </Link>
        {navItems.map((item) => (
          <Link key={item} to={item}>
            <Button sx={{ color: "#fff" }}>{item}</Button>
          </Link>
        ))}
      </Box>
    </AppBar>
  );
}
