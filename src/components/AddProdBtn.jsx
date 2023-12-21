import React from "react";
import { Grid, Button } from "@material-ui/core";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AddProdBtn = () => {
  return (
    <Grid item xs={12}>
      <Link to="/products/AddPage">
        <Button variant="contained" color="primary" fullWidth size={"large"}>
          Add New Flavor
        </Button>
      </Link>
    </Grid>
  );
};

export default AddProdBtn;
