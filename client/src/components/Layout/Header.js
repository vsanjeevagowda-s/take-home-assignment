import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
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
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

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
  }
}));

const Headers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Grid justify="space-between" container className={classes.headerGrid}>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit">logout</Button>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </div>
  );
};

export default Headers;
