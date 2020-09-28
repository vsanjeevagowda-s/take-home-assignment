import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import Header from "./Header";
import ListItems from './ListItems';

const Layout = () => {
  const Panel = () => {
    return (
      <Container>
        <Paper>
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
              <Box p={2}>sssuavsua</Box></Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };



  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <Panel />
      </Grid>
      <Grid item>
        <ListItems />
      </Grid>
    </Grid>
  );
};

export default Layout;
