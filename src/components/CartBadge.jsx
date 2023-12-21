import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "../App.css";
import { useEffect } from "react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `1.5px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CartBadge(props) {
 

  return (
    <Link to="/CartPage">
    <div className="CartBadge">
      <IconButton aria-label="cart" style={{}}>
        cart-
        <StyledBadge badgeContent={props.cart} color="primary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
    </Link>
  );
}
