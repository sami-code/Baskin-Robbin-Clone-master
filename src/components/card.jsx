import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import productService from "../Services/ProductServices";
import { toast } from "react-toastify";
import { Link, withRouter } from "react-router-dom";
import userService from "../Services/UserServices";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#d8c4b798",
    width: 348,
    textAlign: "center",
  },
  media: {
    height: 387,
  },
});

const MediaCard = ({ title, url, details, CartBadge, id, setcart }) => {
  const classes = useStyles();
  const cart = () => {
    if (CartBadge === "enable") {
      return (
        <Link to="/products">
          <IconButton
            onClick={() => {
              //localStorage.clear();

              if (!localStorage.getItem(id)) {
                if (!localStorage.getItem("items")) {
                  localStorage.setItem("items", 1);
                } else {
                  localStorage.setItem(
                    "items",
                    Number(localStorage.getItem("items")) + 1
                  );
                }
                localStorage.setItem(id, 1);
                setcart(localStorage.getItem("items"));
              } else {
                localStorage.setItem(id, Number(localStorage.getItem(id)) + 1);
              }
              toast.success("Added to Cart", {
                position: toast.POSITION.TOP_CENTER,
              });
            }}
            color="default"
            aria-label="add to shopping cart"
            style={{ position: "absolute", right: "0", top: "0" }}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Link>
      );
    }
  };
  const trash = () => {
    if (CartBadge === "enable") {
      return (
        <Link to="/products">
          <IconButton
            color="secondary"
            aria-label="delete"
            style={{ position: "absolute", left: "0", top: "0" }}
            onClick={(e) => {
              console.log(id);
              productService
                .deleteProduct(id)
                .then((data) => {
                  window.location.href = "/products";

                  toast.success("Successfully Deleted!", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                })
                .catch((err) => {
                  console.log(err);
                  toast.error(err.response.data, {
                    position: toast.POSITION.TOP_LEFT,
                  });
                });
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
        </Link>
      );
    }
  };
  const edit = () => {
    if (CartBadge === "enable") {
      return (
        <Link to={"/products/EditPage/" + id}>
          <IconButton
            color="inherit"
            aria-label="Edit"
            style={{ position: "absolute", right: "0", bottom: "0" }}
            onClick={(e) => {}}
          >
            <FontAwesomeIcon icon={faEdit} />
          </IconButton>
        </Link>
      );
    }
  };

  return (
    <Card style={{ marginBottom: "10%" }} className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={url} title={title} />

        {cart()}
        {userService.IsAdmin() ? (
          <>
            <span>
              {trash()}
              {edit()}
            </span>
          </>
        ) : (
          <span></span>
        )}
        <CardContent style={{}}>
          <Typography
            style={{ fontFamily: "Sacramento, cursive", fontSize: "210%" }}
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
      </CardActionArea>
    </Card>
  );
};
export default withRouter(MediaCard);
