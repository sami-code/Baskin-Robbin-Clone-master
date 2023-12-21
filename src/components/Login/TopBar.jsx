import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "@material-ui/core/Button";
import userService from "../../Services/UserServices";

const TopBar = () => {
  return (
    <div>
      <h1>Hello Bubby</h1>
      {!userService.isLoogedIn() ? (
        <div>
          {" "}
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              window.location.href = "/Login";
            }}
          >
            Log In with Email
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => {
              window.location.href = "/Register";
            }}
          >
            Register with Email
          </Button>
        </div>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={(e) => {
            userService.logout();
            window.location.href = "/";
          }}
        >
          logout {userService.getLoggedInuser().name}
        </Button>
      )}
    </div>
  );
};

export default TopBar;
