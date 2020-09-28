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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const CustomTable = () => {
  const classes = useStyles();

  const COLUMNS = [ "ID", "Instance Name", "Cost per Hour", "Status", "Action" ];

  const CustomTableRow = ({ data={} }) => {
    return (
    <TableRow>
      <TableCell>sae</TableCell>
    </TableRow>
    )
  }

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {
            COLUMNS.map(c => {
            return <TableCell key={c}>{c}</TableCell>
            })
          }
          
        </TableRow>
      </TableHead>
      <TableBody>
        {
          COLUMNS.map(d=>{
            return <CustomTableRow data={d}/>
          })
        }
          
      </TableBody>
    </Table>
  );
};

const ListItems = () => {
  return (
    <div>
      <Container>
        <Paper>
          <Typography variant="h5">
            <Box p={2}>
              Instances
              <Box>
                <CustomTable />
              </Box>
            </Box>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default ListItems;
