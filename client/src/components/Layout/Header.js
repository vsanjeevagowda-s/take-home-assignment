import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box,
  Grid,
  Container,
} from "@material-ui/core";
import { logout } from '../../services/user';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  headerGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  appBar:{
    backgroundColor:'#005A3C'
  }
}));

const Headers = () => {
  const history = useHistory();
  const classes = useStyles();

  const logoutUser = () => {
    logout()
    .then(resp => {
      localStorage.clear()
      history.push("/");
      debugger
    })
    .catch(error => {
      debugger
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Grid justify="space-between" container className={classes.headerGrid}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" onClick={() => logoutUser()}>logout</Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Headers;
