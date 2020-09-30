import React from "react";
import {
  Grid,
  Paper,
  Container,
  Box,
  Switch,
  Typography,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  usdInrToggler: {
    display: "inline-block",
  }
}));

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: "#005A3C",
      "& + $track": {
        backgroundColor: "#B8D5D1",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#B8D5D1",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Panel = ({ stopperInstancePrice = {}, runningInstancePrice = {}, priceType='usd', parentFunction=()=>{} }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    parentFunction({
      type: 'UPDATE_AND_SHOW_PRICE_TYPE',
      data: { type: event.target.checked ? "usd": "inr" }
    })
  };

  const getIconToDisplay = (price) => {
    if (price === "usd") {
      return (
        <Icon>
          <img src="/images/doller.svg" alt="dollar" />
        </Icon>
      );
    } else {
      return (
        <Icon>
          <img src="/images/rupee.svg" alt="rupee" />
        </Icon>
      );
    }
  };

  return (
    <Container>
      <Paper>
        <Grid container justify="space-between">
          <Grid item>
            <Grid container>
              <Grid item>
                <Box p={2}>
                  {getIconToDisplay(priceType)}
                  {runningInstancePrice[priceType]} / hr
                  <Box>Running instances</Box>
                </Box>
              </Grid>
              <Grid item>
                <Box p={2}>
                {getIconToDisplay(priceType)}
                  {stopperInstancePrice[priceType]} / hr
                  <Box>Stopped Instances</Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Box p={2} height="inherit">
                <Typography className={classes.usdInrToggler}>INR</Typography>
                  <CustomSwitch
                    checked={priceType === 'usd' ? true : false}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
<Typography className={classes.usdInrToggler}>USD</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Panel;
