import React from 'react';
import { TableContainer, Paper } from '@material-ui/core';
import MaterialTable from 'material-table';

import useStyles from './styles';


const TABLE_HEADERS = [
	// { title: 'Full Name', field: 'name' },
	{ title: 'Email Address', field: 'email' },
	// { title: 'Location', field: 'country' },
	// { title: 'Joined', field: 'registered' },
	// { title: 'Permissions', field: 'isEmbedded' },
];

const Table = ({ users }) => {

  const classes = useStyles();

  return (      
    <MaterialTable      
      columns={TABLE_HEADERS}
      data={users}    
      className={classes.mainWrapper}   
      options={{ 
        search: false, 
        pageSize: 10, 
        title: false,      
        rowStyle: {
          backgroundColor: '#494949',    
        },
        headerStyle: {
          backgroundColor: '#3D3D3D',
          color: '#FFFFFF',
          fontSize: '22px',
        },
        cellStyle: {
          backgroundColor: '#494949',
          color: '#FFF'
        },
    }}
    />
  )
}

export default Table;
