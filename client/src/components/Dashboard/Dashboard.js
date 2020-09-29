import React, { useEffect, useState } from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItems from "./ListItems";
import Panel from "./Panel";

import { instances } from "../../services/instances";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [instancesList, setInstancesList] = useState([]);
  const initialPriceObj = {
    usd: 0,
    inr: 0,
  };

  const [stopperInstancePrice, setStopperInstancePrice] = useState(initialPriceObj);
  const [runningInstancePrice, setRunningInstancePrice] = useState(initialPriceObj);

  const getPriceObj = (price = 0) => {
    return {
      usd: price,
      inr: (price / 0.015).toFixed(2)
    }
  }

  const updatePanelData = (instances = []) => {
    let stopperInstancePrice = 0;
    let runningInstancePrice = 0;
    instances.forEach((element) => {
      if (element.status === "stopped") {
        stopperInstancePrice += element.costPerHour;
      } else {
        runningInstancePrice += element.costPerHour;
      }
    });
    setStopperInstancePrice(getPriceObj(stopperInstancePrice));
    setRunningInstancePrice(getPriceObj(runningInstancePrice));
  };

  const listInstances = () => {
    instances()
      .then((resp) => {
        const instances = resp?.instances ? resp.instances : [];
        updatePanelData(instances)
        setInstancesList(instances);
      })
      .catch((error) => {
        debugger;
      });
  };

  useEffect(() => {
    listInstances();
  }, []);

  console.log("instancesList", instancesList);
  return (
    <div>
      <Grid container spacing={5} direction="column" className={classes.grid}>
        <Grid item>
          <Panel stopperInstancePrice={stopperInstancePrice}  runningInstancePrice={runningInstancePrice}/>
        </Grid>
      </Grid>
      <ListItems instancesList={instancesList} />
    </div>
  );
};

export default Dashboard;
