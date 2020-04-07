import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import bugsJson from '../data/bugs.json';
import SeasonsContainer from '../components/season/SeasonsContainer';


const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: '1px 2px 4px rgba(0, 0, 0, .5)',
    width: "95%",
    margin: "auto",
    marginTop: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
}))

interface Bug {
  name: string,
  imageLink: string,
  price: string,
  location: string,
  time: string,
  seasonsContainer: JSX.Element;
}

function createBug(name: string, imageLink: string, price: string, location: string, time: string, seasons: string) {
  let item: Bug = {
    name: name,
    imageLink: imageLink,
    price: price,
    location: location,
    time: time,
    seasonsContainer: <SeasonsContainer seasons={seasons}/>,
  };
  return item;
}

let rows: Bug[] = [];
bugsJson.forEach(obj => {
  rows.push(createBug(obj.name, obj.imageLink, obj.price, obj.location, obj.time, obj.jan + obj.feb + obj.mar + obj.apr + obj.may + obj.jun + obj.jul + obj.aug + obj.sep + obj.oct + obj.nov + obj.dec))
});

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Seasons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <img src={row.imageLink} alt={row.name} width="64" height="64"/>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.seasonsContainer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
