import React from 'react';
import Moment from 'moment';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Avatar, Typography, TablePagination  } from '@material-ui/core';
import Button from '../Button/Button';
import PencilIcon from '../icons/PencilIcon';
import TrashIcon from '../icons/TrashIcon';
import useStyles from './styles';

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



// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });


const columns = [
  { id: 'fullName', label: 'Full Name', paddingLeft: 120 },
  { id: 'email', label: 'Email Address' },
  { id: 'location', label: 'Location' },
  { id: 'joined', label: 'Joined' },
  { id: 'btnModify', label: '' },
  { id: 'btnEdit', label: '' },
];

export default function CustomizedTable({users}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const classes = useStyles();
  console.log(users)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.head}>
          <TableRow>
            {columns.map((column) => (
                <StyledTableCell className={classes.header}
                  key={column.id}                  
                  style={{ paddingLeft: column.paddingLeft }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user._id}>
              <StyledTableCell component="th" scope="row" className={classes.fullNameCell}>
                <Avatar alt={user.name.last} src={user.picture.thumbnail} className={classes.avatar} />              
                {`${user.name.first} ${user.name.last}`}
              </StyledTableCell>
              <StyledTableCell align="right">{user.email}</StyledTableCell>
              <StyledTableCell align="right">{user?.location?.country}</StyledTableCell>
              <StyledTableCell align="right"> {Moment(user?.registered?.date).format('MMMM D, YYYY')}</StyledTableCell>
              <StyledTableCell align="right"><Button iconName={<PencilIcon/>}>Modify</Button></StyledTableCell>
              <StyledTableCell align="right"><Button iconName={<TrashIcon/>}>Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>  
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        // count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />   
    </TableContainer>
  );
}
