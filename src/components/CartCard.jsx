import React from "react";
import {
  Card,
  Grid,
  Typography,
  makeStyles,
  Button,
  Divider,
} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { render } from "@testing-library/react";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#d8c4b798",
    width: 550,
    textAlign: "center",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
    },
  },
  media: {
    height: 155,
  },
  cardtitle: {
    fontSize: "200%",
    [theme.breakpoints.down("sm")]: {
      fontSize: "125%",
    },
  },
}));
const CartCard = ({ title, url, details, id, price }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(localStorage.getItem(id));

  return (
    <div>
      <Grid
        container
        direction=""
        alignItems="center"
        justify="center"
        spacing={2}
        style={{ margin: "1%", marginLeft: "0%", marginRight: "0%" }}
      >
        <Grid item>
          <Card className={classes.root}>
            <Grid container>
              <Grid item xs={4}>
                <CardMedia
                  className={classes.media}
                  image={url}
                  title={title}
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent style={{}}>
                  <Typography
                    style={{
                      fontFamily: "Sacramento, cursive",
                    }}
                    className={classes.cardtitle}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {title}
                  </Typography>

                  <Typography
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "75%",
                      color: "black",
                    }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {details}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
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
            min="0"
            max="9"
            disabled="true"
            value={quantity}
            onChange={(e) => {}}
          ></input>
        </Grid>
        <Grid item>Price: {price * quantity}</Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => {
              localStorage.removeItem(id);
              localStorage.setItem(
                "items",
                Number(localStorage.getItem("items") - 1)
              );
              if (Number(localStorage.getItem("items")) === 0) {
                localStorage.removeItem("items");
              }
              window.location.href = "/CartPage";
            }}
          >
            Delete item
          </Button>
        </Grid>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
};

export default CartCard;
