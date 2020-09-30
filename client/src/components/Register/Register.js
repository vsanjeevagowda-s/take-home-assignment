import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  TextField,
  FormLabel,
  FormGroup,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { register } from "../../services/user";

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

const Register = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("StrongPassword123");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    register({ email, password })
      .then((resp) => {
        history.push("/dashboard");
      })
      .catch((error) => {
        console.error('error', error)
        setErrorMessage(error.message);
        setTimeout(() => setErrorMessage(""), 2000);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      bgcolor="inherit"
      alignItems="center"
      className={classes.formWrapper}
    >
      <Box p={4} bgcolor="#FFFFFF" width="40%" borderRadius={16}>
        <Box p={2} display="flex" justifyContent="center">
        <Typography variant="h5">Sign Up</Typography>
        </Box>

        {errorMessage && (
          <Box display="flex" justifyContent="center">
            <Alert severity="error">{errorMessage}</Alert>
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
              <FormLabel><Box p={1}>Email</Box></FormLabel>
              <TextField
                inputProps={{ "data-testid": "register-email" }}
                type="text"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </FormControl>
          </FormGroup>
          <FormGroup>
            <FormControl>
              <FormLabel><Box p={1}>Password</Box></FormLabel>
              <TextField
                inputProps={{ "data-testid": "register-password" }}
                name="password"
                type="password"
                variant="outlined"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </FormControl>
          </FormGroup>
          <Box mt={2}>
            <Button data-testid="register-button" className={classes.button} type="submit" fullWidth>
              Create an account
            </Button>
          </Box>
        </form>
        <Box display="flex" justifyContent="center">
          <Link to="/" className={classes.link}>
            Have an account already? Login here
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
