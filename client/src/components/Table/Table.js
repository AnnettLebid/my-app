import React from 'react';
import MaterialTable from 'material-table';

import useStyles from './styles';


const TABLE_HEADERS = [
	{ title: 'Full Name', field: 'name', align: "center" },
	{ title: 'Email Address', field: 'email', align: "center" },
	{ title: 'Location', field: 'country', align: "center" },
	{ title: 'Joined', field: 'registered', align: "center" },
	{ title: 'Permissions', field: 'isEmbedded', align: "center" },
];

const Table = (props) => {

  const classes = useStyles();

  const users = props.users;
  
  return (      
    <MaterialTable      
      columns={TABLE_HEADERS}
      // data={users}    
      className={classes.mainWrapper}   
      options={{ 
        search: false, 
        pageSize: 10, 
        showTitle: false,
        toolbar: false,
        borderRadius: "4px",
        // paging: true,
        pageSizeOptions: [5, 10, 15, 20],
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
        actionsColumnIndex: -1
    }}
    actions={[
      {
        icon: 'save',
        tooltip: 'Save User',
        onClick: (event, rowData) => alert("You saved " + rowData.name)
      },
      rowData => ({
        icon: 'delete',
        tooltip: 'Delete User',
        onClick: (event, rowData) => {},       
      })
    ]} 
    />   
  )
}

export default Table;
