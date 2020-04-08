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
import TableSortLabel from '@material-ui/core/TableSortLabel';

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
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

interface Bug {
  name: string,
  imageLink: string,
  price: number,
  location: string,
  time: string,
  seasonsContainer: JSX.Element;
}

function createBug(name: string, imageLink: string, price: string, location: string, time: string, seasons: string) {
  let item: Bug = {
    name: name,
    imageLink: imageLink,
    price: parseInt(price),
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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any> (order: Order, orderBy: Key,): (a: { [key in Key]: any}, b: { [key in Key]: any }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface SortableRows {
  id: keyof Bug;
  label: string;
  numeric: boolean;
}

const sortableRows: SortableRows[] = [
  { id: 'name', numeric: false, label: 'Name' },
  { id: 'price', numeric: true, label: 'Price' },
  { id: 'location', numeric: false, label: 'Location' },
  { id: 'time', numeric: false, label: 'Time' },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Bug) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const classes = useStyles();
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Bug) => (event: React.MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>Image</TableCell>
        {sortableRows.map((sortableRow) => (
          <TableCell
            key={sortableRow.id}
            sortDirection={orderBy === sortableRow.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === sortableRow.id}
              direction={orderBy === sortableRow.id ? order : 'asc'}
              onClick={createSortHandler(sortableRow.id)}
            >
              {sortableRow.label}
              {orderBy === sortableRow.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
            
          </TableCell>
        ))}
        <TableCell>Seasons</TableCell>
      </TableRow>
    </TableHead>
  );
}
export default function SimpleTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState('');

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} >
      <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort}/>
        <TableBody>
        {stableSort(rows, getComparator(order, orderBy)).map(row => (
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
