import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import fishJSON from '../data/fish.json';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, image: string, price: string, location: string, shadowSize: string, time: string, seasons: string) {
  return { name, image, price, location, shadowSize, time, seasons };
}

// fishJSON.forEach(obj => {
  
// });

const rows = [
  createData("Crawfish", "https://vignette.wikia.nocookie.net/animalcrossing/images/e/e2/Crawfish_HHD_Icon.png/revision/latest?cb=20161105194621", "200", "Pond", "2", "All day", "---vvvvvv---"),


];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Shadow Size</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Seasons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                
                <img src={row.image} alt="Italian Trulli"/>

              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="left">{row.location}</TableCell>
              <TableCell align="right">{row.shadowSize}</TableCell>
              <TableCell align="left">{row.time}</TableCell>
              <TableCell align="left">{row.seasons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
