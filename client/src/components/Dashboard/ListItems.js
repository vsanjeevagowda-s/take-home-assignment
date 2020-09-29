import React, { useState } from "react";

import {
  Container,
  Paper,
  Typography,
  Box,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  TableContainer,
  Link,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const TABLE_ROWS = ["ID", "Instance Name", "Cost Per Hour", "Status", "Action"];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  hideLastBorder: {
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
  stopLink:{
    color: '#E1555A'
  },
  startLink:{
    color: '#005A3C'
  },
  bodyCells:{
    textAlign: 'left'
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B8D5D1",
    color: theme.palette.common.black,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#E9F0F0",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#F2F2F2",
    },
  },
}))(TableRow);

const ListItems = ({ instancesList = [], parentFunction=()=>{} }) => {
  const classes = useStyles();

  const instanceAction = (status = "stopped") => {
    const preventDefault = (event) => event.preventDefault();
    if (status == "stopped") {
      return (
        <Link href="#" className={classes.startLink} onClick={preventDefault}>
          Start
        </Link>
      );
    } else {
      return (
        <Link href="#" className={classes.stopLink} onClick={preventDefault}>
          Stop
        </Link>
      );
    }
  };

  const getNextStatus = (status) => {
    if(status === 'stopped') return 'start';
    return 'stop'
  }

  return (
    <Container maxWidth="lg">
      <Paper>
        <Box p={2}>Instances</Box>
        <Box ml={2} mr={2} borderRadius={10} style={{ overflowX: "scroll" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {TABLE_ROWS.map((i) => {
                  return <StyledTableCell key={i}>{i}</StyledTableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {instancesList.map((row) => (
                <StyledTableRow key={row.id} className={classes.hideLastBorder}>
                  <TableCell className={classes.bodyCells} component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell className={classes.bodyCells} align="right">{row.name}</TableCell>
                  <TableCell className={classes.bodyCells} align="right">{row.costPerHour}</TableCell>
                  <TableCell className={classes.bodyCells} align="right">{row.status}</TableCell>
                  <TableCell onClick={() => parentFunction({
                    type: 'START_STOP_INSTANCE',
                    action: {  
                      nextStatus: getNextStatus(row.status),
                      id: row.id
                    }
                  })} className={classes.bodyCells} align="right">
                    {instanceAction(row.status)}
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Paper>
    </Container>
  );
};

export default ListItems;
