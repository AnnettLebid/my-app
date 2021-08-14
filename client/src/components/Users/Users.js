import React, { useState, useEffect } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import AddButton from '../AddButton/AddButton';
import Table from '../Table/Table'; 
import Form from '../Form/Form';
import { fetchUsers } from '../../api/index.js';

import { Box } from '@material-ui/core';
import plarformUsers from '../DB/users1000.json';

import useStyles from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formPopup, setFormPopup] = useState(false);
  const classes = useStyles();

  useEffect(() => {  
    // const usersData = fetchUsers();
    // setUsers(usersData);
  },[]);

  const showFormPopup = () => {
    setFormPopup(prev => !prev);
  }
  
  return (
    <Box className={classes.mainContainer}>
			<Box className={classes.boxContainer}>
				<SearchBox />
				<AddButton name={`+  New User`} showFormPopup={showFormPopup} formPopup={formPopup}/>
			</Box>
			<Table/>	
      {formPopup && <Form showFormPopup={showFormPopup}/>}
    </Box>
  )
}

export default Users;
