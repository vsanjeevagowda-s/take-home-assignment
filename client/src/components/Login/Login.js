import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  TextField,
  FormLabel,
  FormGroup,
  Typography,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { login } from "../../services/user";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    backgroundColor: "#005A3C",
    color: "white",
  },
  link: {
    color: "#005A3C",
    marginTop: "1em",
  },
  formWrapper: {
    height: "100vh",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("StrongPassword123");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    login({ email, password })
      .then((resp) => {
        history.push("/dashboard");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setTimeout(() => setErrorMessage(""), 2000);
      });
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.formWrapper}
    >
      <Grid item xs={12} sm={6} lg={4} md={6}>
        <Box p={4} bgcolor="#FFFFFF" width="inherit" borderRadius={16}>
          <Box p={2} display="flex" justifyContent="center">
            <Typography variant="h5">Sign In</Typography>
          </Box>

          {errorMessage && (
            <Box display="flex" justifyContent="center">
              <Alert data-testid="error-message" severity="error">
                {errorMessage}
              </Alert>
            </Box>
          )}
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <FormControl>
                <FormLabel>
                  <Box p={1}>Email</Box>
                </FormLabel>
                <TextField
                  inputProps={{ "data-testid": "login-email" }}
                  type="text"
                  variant="outlined"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </FormControl>
            </FormGroup>
            <FormGroup>
              <FormControl>
                <FormLabel>
                  <Box p={1}>Password</Box>
                </FormLabel>
                <TextField
                  inputProps={{ "data-testid": "login-password" }}
                  name="password"
                  type="password"
                  variant="outlined"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </FormControl>
            </FormGroup>
            <Box mt={2}>
              <Button
                data-testid="login-button"
                className={classes.button}
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center">
            <Link to="/register" className={classes.link}>
              Create an account
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
