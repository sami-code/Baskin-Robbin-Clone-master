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
import { withRouter } from "react-router-dom";
toast.configure();

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInPage = (props) => {
  const [email, setEmail] = React.useState("Admin@gmail.com");
  const [password, setPassword] = React.useState("Admin");
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
                Sign in
              </Typography>
              <form className={classes.form} noValidate onsubmit="return false">
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
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
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e) => {
                    userService
                      .login(email, password)
                      .then((data) => {
                        console.log(data);

                        toast.success("Successfully Login!", {
                          position: toast.POSITION.TOP_CENTER,
                        });
                        setTimeout(() => {
                          window.location.href = "/";
                        }, 800);
                      })
                      .catch((err) => {
                        console.log(err);
                        toast.error(err.response.data, {
                          position: toast.POSITION.TOP_LEFT,
                        });
                      });
                  }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default withRouter(SignInPage);
