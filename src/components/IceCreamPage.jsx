import React from "react";
import MediaCard from "./card";
import { Paper, Grid, Button, Hidden } from "@material-ui/core";
import { makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import productService from "../Services/ProductServices";
import { toast } from "react-toastify";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const IceCreamPage = (props) => {
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();
  const [price, setPrice] = React.useState();
  const [url, setUrl] = React.useState();
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getProduct(id).then((data) => {
      setName(data.name);
      setDescription(data.description);
      setPrice(data.price);
      setUrl(data.url);
    });
  }, []);
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item sm={12} md={9}>
          <Paper
            className="IcePaper"
            elevation={3}
            style={{
              backgroundColor: "#d8c4b798",
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <MediaCard details={description} title={name} url={url} />
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="center"
                  spacing={3}
                  style={{}}
                  className="AddButtons"
                >
                  <Typography variant="h4" style={{ fontFamily: "Raleway" }}>
                    Price Per Scoop: {price}
                  </Typography>
                  <Grid item>
                    <Hidden xsDown>
                      Qantity
                      <input
                        style={{
                          width: "32%",
                          backgroundColor: "#d8c4b798",
                          border: "none",
                          marginLeft: "10%",
                        }}
                        label="quantity"
                        type="number"
                        min="1"
                        max="9"
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      ></input>
                    </Hidden>
                  </Grid>
                  <Grid item>
                    <div className="IceBtnGrp">
                      <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start"
                        spacing={2}
                      >
                        <Grid item>
                          <Button
                            variant="contained"
                            color="Primary"
                            onClick={() => {
                              if (!localStorage.getItem(id)) {
                                if (!localStorage.getItem("items")) {
                                  localStorage.setItem("items", 1);
                                } else {
                                  localStorage.setItem(
                                    "items",
                                    Number(localStorage.getItem("items")) + 1
                                  );
                                }
                                localStorage.setItem(id, Number(quantity));
                                props.setcart(localStorage.getItem("items"));
                              } else {
                                localStorage.setItem(
                                  id,
                                  Number(localStorage.getItem(id)) +
                                    Number(quantity)
                                );
                              }
                              toast.success("Added to Cart", {
                                position: toast.POSITION.TOP_CENTER,
                              });
                            }}
                          >
                            Add to Cart
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(IceCreamPage);
