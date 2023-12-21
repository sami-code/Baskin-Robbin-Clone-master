import React from "react";
import { Grid, TextField, Paper, Typography, Button } from "@material-ui/core";
import productService from "../Services/ProductServices";
import InputLabel from "@material-ui/core/InputLabel";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Admin from "./Auth/admin";

const EditPage = (props) => {
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
  return (
    <Admin>
      <Grid container direction="row" justify="center">
        <Grid item sm={12} md={8}>
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
              <Typography variant="h3">Edit Ice Cream details</Typography>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="name"
                  fullWidth
                  value={name || ""}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></TextField>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="description"
                  multiline="true"
                  value={description || ""}
                  fullWidth
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="price"
                  value={price || ""}
                  fullWidth
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  id="standard-basic"
                  label="url"
                  value={url || ""}
                  fullWidth
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
                        .updateProduct(id, { name, price, url, description })
                        .then((data) => {
                          console.log(data);

                          toast.success("Successfully Updated!", {
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
                    Save Changes
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

export default EditPage;
