import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIceCream,
  faUser,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./TopBar.css";
import CartBadge from "./CartBadge";
import { Link } from "react-router-dom";
import userService from "../Services/UserServices";

const TopBar = (props) => {
  return (
    <div style={{ paddingTop: "1%", textAlign: "center" }}>
      <div style={{ paddingBottom: "1%" }}>
        <Link to="/">
          <img
            className="logo"
            style={{ width: "70px" }}
            src="https://www.baskinrobbins.com/etc/designs/br/images/branding/br-logo-stamp.svg"
            alt="Baskin' Robbins Logo"
          />
        </Link>
      </div>
      <div
        className="menu"
        style={{ paddingBottom: "0%", position: "relative" }}
      >
        <Link to="/products" class="tile">
          Flavors <FontAwesomeIcon icon={faIceCream} />
        </Link>
        {!userService.isLoogedIn() ? (
          <>
            <Link to="/SignInPage" class="tile">
              Sign In <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link to="/SignUpPage" class="tile">
              Sign Up <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          </>
        ) : (
          <Link
            to="/"
            class="tile"
            onClick={(e) => {
              userService.logout();
              window.location.href = "/";
            }}
          >
            Logout {userService.getLoggedInuser().name}{" "}
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
        <CartBadge cart={props.cart} />
      </div>
    </div>
  );
};

export default TopBar;
