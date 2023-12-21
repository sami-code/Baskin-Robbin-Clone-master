import React from "react";
import HorizontalCards from "./HorizontalCards";
import AddProdBtn from "./AddProdBtn";
import { Grid } from "@material-ui/core";
import userService from "../Services/UserServices";

const FlavorPage = (props) => {
  return (
    <Grid container justify="center" alignItems="center">
      <HorizontalCards Title={"Flavors Menu"} setcart={props.setcart} />
      <Grid item xs={0}></Grid>
      <Grid item xs={6} md={4}>
        {userService.IsAdmin() ? (
          <>
            <AddProdBtn />
          </>
        ) : (
          <span></span>
        )}
      </Grid>
    </Grid>
  );
};

export default FlavorPage;
