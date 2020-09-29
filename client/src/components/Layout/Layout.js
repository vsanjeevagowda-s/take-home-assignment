import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ListItems from "./ListItems";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));

const Layout = () => {
  const classes = useStyles();

  const Panel = () => {
    return (
      <Container>
        <Paper>
          <div className={classes.root}>
            <Grid container justify="space-between">
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Box p={2}>ss</Box>
                  </Grid>
                  <Grid item>
                    <Box p={2}>ss</Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Box p={2}>sssuavsua</Box>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    );
  };

  return (
    <div>
      <Header />
      <Grid container spacing={5} direction="column" className={classes.grid}>
        <Grid item>
          <Panel />
        </Grid>
        
      </Grid>
      <ListItems />
    </div>
  );
};

export default Layout;
