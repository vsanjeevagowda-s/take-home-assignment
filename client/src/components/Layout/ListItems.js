import React from "react";
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
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  hideLastBorder: {
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B8D5D1",
    color: theme.palette.common.black,
  }
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: "#E9F0F0",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#F2F2F2",
    },
  },
}))(TableRow);

const ListItems = () => {
  const classes = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  // const defaultProps = {
  //   bgcolor: 'background.paper',
    
  //   m: 1,
  //   border: 1,
  // };

  return (
    <Container maxWidth="lg">
      <Paper>
        <Box p={2}>Instances</Box>
        <Box ml={2} mr={2} borderRadius={10}  style={{overflowX: 'scroll'}}>
      
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name} className={classes.hideLastBorder}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
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
