import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import userService from "../../Services/UserServices";
import { ToastContainer, toast } from "react-toastify";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const SignUpPage = () => {
  const [email, setEmail] = React.useState("Admin@gmail.com");
  const [password, setPassword] = React.useState("Admin");
  const [name, setName] = React.useState("Admin");
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center">
      <Grid item sm={12} md={9}>
        <Paper
          className="IcePaper"
          elevation={3}
          style={{
            paddingTop: "0.1%",
            backgroundColor: "#d8c4b798",
          }}
        >
          <Container
            component="main"
            maxWidth="xs"
            style={{ backgroundColor: "#d8c4b798", marginBottom: "5%" }}
          >
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="UserName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Full Name"
                    autoFocus
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => {
                  userService
                    .register(name, email, password)
                    .then((data) => {
                      console.log(data);
                      window.location.href = "/";
                      toast.success("Successfully Register!", {
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
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </div>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
