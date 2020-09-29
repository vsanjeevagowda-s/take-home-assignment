import React from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Dashboard from '../Dashboard/Dashboard';


const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));

const Layout = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Dashboard />
    </div>
  );
};

export default Layout;
