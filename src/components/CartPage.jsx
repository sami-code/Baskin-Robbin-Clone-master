import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import IceCream from "../favflav";
import { Link } from "react-router-dom";
import CartCard from "./CartCard";
import productService from "../Services/ProductServices";
import Auth from "../components/Auth/auth";
import mailService from "../Services/MailService";
import userService from "../Services/UserServices";
import { toast } from "react-toastify";

const CartPage = ({ setcart }) => {
  console.log("herrr");
  const [products, setproducts] = React.useState([]);
  const getData = () => {
    productService
      .getAllProduct()
      .then((data) => {
        setproducts(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  const CardComp = products.map((user, i) => {
    if (localStorage.getItem(String(products[i]._id))) {
      return (
        <Grid item xs={12}>
          <CartCard
            style={{ flexBasis: "100%" }}
            id={products[i]._id}
            title={products[i].name}
            details={products[i].description}
            url={products[i].url}
            price={products[i].price}
          />
        </Grid>
      );
    }
  });
  return (
    <Auth>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={11} md={9}>
          <Paper style={{ backgroundColor: "#d8c4b798", paddingTop: "2%" }}>
            <Typography
              variant="h3"
              align="center"
              style={{ fontFamily: "Sacramento" }}
            >
              Cart Items
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {CardComp}

              <Grid item style={{ margin: "4%" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    let temp = localStorage.getItem("token");
                    if (localStorage.getItem("items")) {
                      mailService.sendmail(userService.getLoggedInuser()._id);
                      toast.success("Mail Sent!", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    } else {
                      toast.error("Your Cart Is Empty", {
                        position: toast.POSITION.TOP_LEFT,
                      });
                    }

                    localStorage.clear();
                    localStorage.setItem("token", temp);
                    setcart(0);
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default CartPage;
