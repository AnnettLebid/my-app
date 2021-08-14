import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../SearchBox/SearchBox';
import AddButton from '../AddButton/AddButton';
import Table from '../Table/Table'; 
import CustomizedTable from '../CustomizedTable/CustomizedTable';
import Form from '../Form/Form';

import { Box } from '@material-ui/core';


import useStyles from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formPopup, setFormPopup] = useState(false);
  const classes = useStyles();

  const loadUsers =  async () => {
    const result = await axios.get("http://localhost:5000/users")
    const { data } = result;
    setUsers(data);
  }

  useEffect(() => {  
    loadUsers();    
  },[]);

  const showFormPopup = () => {
    setFormPopup(prev => !prev);
  }

  console.log(users);
  return (
  <Box className={classes.mainContainer}>
    <Box className={classes.boxContainer}>
      <SearchBox />
      <AddButton name={`+  New User`} showFormPopup={showFormPopup} formPopup={formPopup}/>
    </Box>
    <CustomizedTable />
    {/* <Table users={users} />	 */}
    {formPopup && <Form showFormPopup={showFormPopup}/>}
  </Box>
  )
}

export default Users;
