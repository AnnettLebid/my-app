import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TablePagination  } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3D3D3D',
    color: theme.palette.common.white,
    fontSize: 22,
    borderBottom: 'none',
    textAlign: 'left',
  },
  body: {
    fontSize: 24,
    backgroundColor: '#494949',
    borderBottom: 'none',
    textAlign: 'left',
    color: '#FFFFFF',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#494949',
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Geneviève Roux', 'genevieve.roux@example.com', 'Switzerland', 'June 1, 2014', 'Admin'),
  createData('Adam Green', 'adam.green@example.com', 'New Zeland', 'March 30, 2019', 'Admin'),
  createData('Jeanne Brunet', 'jeanne.brunet@example.com', 'France', 'November 24, 2014', 'Admin'),
  createData('Ulla Bürkle', 'ulla.burkle@example.com', 'Germany', 'May 28, 2019', 'Contributor'),
  createData('Jaque Gomes', 'jaque.gomes@example.com', 'Brazil', 'July 12, 2017', 'Contributor'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function CustomizedTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Full Name</StyledTableCell>
            <StyledTableCell align="right">Email Address</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Joined</StyledTableCell>
            <StyledTableCell align="right">Permissions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>     
    </TableContainer>
  );
}
