import React, { useEffect, useState } from "react";
import { Grid, Paper, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItems from "./ListItems";
import Panel from "./Panel";

import { instances, updateInstance } from "../../services/instances";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [instancesList, setInstancesList] = useState([]);
  const [priceType, setPriceType] = useState("usd");

  const initialPriceObj = {
    usd: 0,
    inr: 0,
  };

  const [stopperInstancePrice, setStopperInstancePrice] = useState(
    initialPriceObj
  );
  const [runningInstancePrice, setRunningInstancePrice] = useState(
    initialPriceObj
  );

  const getPriceObj = (price = 0) => {
    return {
      usd: price.toFixed(2),
      inr: (price / 0.015).toFixed(2),
    };
  };

  const updateInstancesAndPanelData = (instances = []) => {
    let stopperInstancePrice = 0;
    let runningInstancePrice = 0;
    const newInstances = instances.map((element) => {
      if (element.status === "stopped") {
        stopperInstancePrice += element.costPerHour;
      } else {
        runningInstancePrice += element.costPerHour;
      }
      return element.costPerHour = getPriceObj(element.costPerHour)
    });
    setStopperInstancePrice(getPriceObj(stopperInstancePrice));
    setRunningInstancePrice(getPriceObj(runningInstancePrice));
  };

  const listInstances = () => {
    instances()
      .then((resp) => {
        const instances = resp?.instances ? resp.instances : [];
        updateInstancesAndPanelData(instances);
        setInstancesList(instances);
      })
      .catch((error) => {
        console.error('error', error)
      });
  };

  const parentFunction = ({ type, data }) => {
    switch (type) {
      case "START_STOP_INSTANCE":
        return updateInstance({ ...data }).then((resp) => {
          listInstances();
        });
      case "UPDATE_AND_SHOW_PRICE_TYPE":
        return setPriceType(data.type);
      default:
        return console.log("Unknown action type");
    }
  };

  useEffect(() => {
    listInstances();
  }, []);

  return (
    <div>
      <Grid container spacing={5} direction="column" className={classes.grid}>
        <Grid item>
          <Panel
            stopperInstancePrice={stopperInstancePrice}
            priceType={priceType}
            runningInstancePrice={runningInstancePrice}
            parentFunction={parentFunction}
          />
        </Grid>
      </Grid>
      <ListItems
        parentFunction={parentFunction}
        instancesList={instancesList}
        priceType={priceType}
      />
    </div>
  );
};

export default Dashboard;
