import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function SearchAppBar({ setDrawer }) {
  const location = useLocation();
  const cartCount = useSelector((state) => state.cart.value);
  const favorites = useSelector((state) => state.favorite.value);
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => {
              setDrawer((prev) => !prev);
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <MenuItem
            onClick={() => {
              navigate("/");
            }}
            sx={{
              mx: 1,
              borderRadius: "5px",
              display: { xs: "none", sm: "block" },
              color: location.pathname == "/" ? "#1976d2" : "",
              bgcolor: location.pathname == "/" ? "white" : "",
              "&:hover": {
                color: location.pathname == "/" ? "#1976d2" : "",
                bgcolor: location.pathname == "/" ? "white" : "",
              },
            }}
          >
            <Typography textAlign="center">Home</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("contact-us");
            }}
            sx={{
              mx: 1,
              borderRadius: "5px",
              display: { xs: "none", sm: "block" },
              color: location.pathname == "/contact-us" ? "#1976d2" : "",
              bgcolor: location.pathname == "/contact-us" ? "white" : "",
              "&:hover": {
                color: location.pathname == "/contact-us" ? "#1976d2" : "",
                bgcolor: location.pathname == "/contact-us" ? "white" : "",
              },
            }}
          >
            <Typography textAlign="center">Contact Us</Typography>
          </MenuItem>

          <div style={{ marginLeft: "auto", fontSize: "20px" }}>
            {`${cartCount.length}`}
          </div>
          <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          <div
            style={{ marginLeft: 20, fontSize: "20px" }}
          >{`${favorites.length}`}</div>
          <FavoriteIcon sx={{ fontSize: "30px" }} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
