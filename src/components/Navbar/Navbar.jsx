import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={Logo}
              alt="buy-now"
              height="25px"
              className={classes.image}
            />
            𝔹𝕌𝕐 ℕ𝕆𝕎
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show Cart Items"
              color="inherit"
            >
              <Badge
                badgeContent={totalItems}
                overlap="rectangular"
                color="secondary"
              >
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>) }
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
