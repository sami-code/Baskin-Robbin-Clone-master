import React from "react";
import { Grid, TextField, Paper, Typography, Button } from "@material-ui/core";
import productService from "../Services/ProductServices";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Admin from "./Auth/admin";

const AddPage = () => {
  const [name, setName] = React.useState("Dark Mango");
  const [description, setDescription] = React.useState(
    " A colorful blend of blue and pink cake batter flavored ice cream with yellow buttercream flavored ice cream."
  );
  const [price, setPrice] = React.useState(100);
  const [url, setUrl] = React.useState(
    "https://www.baskinrobbins.com/content/dam/br/img/gallery/w8_2020/gallerytile-surpriseparty-348x387.png"
  );
  return (
    <Admin>
      <Grid container direction="row" justify="center">
        <Grid item xs={12} md={8}>
          <Paper
            className="IcePaper"
            elevation={3}
            style={{
              paddingTop: "0.1%",
              padding: "5%",
              backgroundColor: "#d8c4b798",
            }}
          >
            <Grid
              container
              direction="row"
              alignItems="space-between"
              justify="center"
            >
              <Typography variant="h3">Add Ice Cream</Typography>
              <br />
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="Title"
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="Description"
                  fullWidth
                  multiline
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="Price"
                  fullWidth
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="URL"
                  fullWidth
                  multiline
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={5} md={5} style={{ marginTop: "4%" }}>
                <Link to="/products">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={(e) => {
                      productService
                        .addProduct(name, price, url, description)
                        .then((data) => {
                          console.log(data);

                          toast.success("Successfully Added!", {
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
                    Add
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Admin>
  );
};

export default AddPage;
