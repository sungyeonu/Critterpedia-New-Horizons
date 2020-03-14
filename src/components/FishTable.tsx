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

interface Fish {
  name: string;
  imageLink: string;
  price: string;
  location: string;
  shadowSize: string;
  time: string;
  seasons: string;
}

function createData(name: string, imageLink: string, price: string, location: string, shadowSize: string, time: string, seasons: string) {
  let item: Fish = { 
    name: name, 
    imageLink: imageLink, 
    price: price, 
    location: location, 
    shadowSize: shadowSize, 
    time: time, 
    seasons: seasons, 
   };
  return item;
}

let rows: Fish[] = [];
fishJSON.forEach(obj => {
  rows.push(createData(obj.name, obj.imageLink, obj.price, obj.location, obj.shadowSize, obj.time, obj.jan + obj.feb + obj.mar + obj.apr + obj.may + obj.jun + obj.jul + obj.aug + obj.sep + obj.oct + obj.nov + obj.dec))
});

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Shadow Size</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Seasons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <img src={row.imageLink} alt={row.name}/>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.shadowSize}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.seasons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
