import React from "react";
import MediaCard from "./card.jsx";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IceCream from "../favflav";
import { Link } from "react-router-dom";

import productService from "../Services/ProductServices.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
const HorizontalCards = ({ Title, setcart, slice }) => {
  const [products, setproducts] = React.useState([]);
  const getData = () => {
    productService
      .getAllProduct()
      .then((data) => {
        setproducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(getData, []);
  const classes = useStyles();
  const CardComp = products.map((product, index) => {
    return (
      <Grid item key={products[index]._id}>
        <Link to={"/IceCreamPage/" + products[index]._id}>
          <MediaCard
            id={products[index]._id}
            title={products[index].name}
            price={products[index].price}
            details={products[index].description}
            url={products[index].url}
            CartBadge={"enable"}
            setcart={setcart}
          />
        </Link>
      </Grid>
    );
  });
  return (
    <div className={classes.root}>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#d8c4b798",
          padding: "3%",
          margin: "5%",
          marginTop: "1%",
          paddingTop: "1.5%",
          paddingBottom: "1.5%",
        }}
      >
        <Typography
          variant="h3"
          align={"center"}
          style={{ fontFamily: "Sacramento", color: "rgb(19, 69, 128)" }}
        >
          {Title}
        </Typography>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {slice ? <>{CardComp.slice(0, 3)}</> : <>{CardComp}</>}
        </Grid>
      </Paper>
    </div>
  );
};

export default HorizontalCards;
