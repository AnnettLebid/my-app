import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBox from '../SearchBox/SearchBox';
import AddButton from '../AddButton/AddButton';
import CustomizedTable from '../CustomizedTable/CustomizedTable';
import Form from '../Form/Form';
import Popup from '../Popup/Popup';
import Loader from '../Loader/Loader';
import { deleteUser } from '../../api';
import { createUser } from '../../api';

import { Box } from '@material-ui/core';

import useStyles from './styles';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [formPopup, setFormPopup] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const classes = useStyles();

  const loadUsers =  async () => {
    try {
      const {data} = await axios.get("http://localhost:5000/users");  
      setUsers(data);
      setIsLoading(false);      
    } catch (error) {
      console.log(error); 
    }
  }

  // const getSearchResults = (searchValue) => {
  //   console.log(searchValue);
  // }

  useEffect(() => {  
    loadUsers();    
  },[]);

  // useEffect(() => {
  //   getSearchResults(searchValue);
  // },[searchValue])

  const toggleFormPopup = () => {
    setFormPopup(prev => !prev);
  }
  
  const showDeleteDialog = (id) => {
    setCurrentUser(id);
    togglePopup();
  }

  const deleteUserData = async () => {
    await deleteUser(currentUser);
    togglePopup();
    setCurrentUser(null);  
    loadUsers();   
  }

  const createNewUser = async (userData) => {    
    await createUser(userData)  ;  
  }

  const togglePopup = () => {
    setDisplayPopup(prev => !prev);
  }
 
  return (
  <Box className={classes.mainContainer}>
    <Box className={classes.boxContainer}>
      <SearchBox searchVale={searchValue} setSearchValue={setSearchValue} />
      <AddButton name={`+  New User`} showFormPopup={toggleFormPopup} formPopup={formPopup}/>
    </Box>
    { users ?  <CustomizedTable users={users} showDeleteDialog={showDeleteDialog} /> : ''}   
    { formPopup && <Form toggleFormPopup={toggleFormPopup} createNewUser={createNewUser}/> }
    {displayPopup && 
      <Popup hidePopup={togglePopup} confirmPopup={deleteUserData}/>}    
    { isLoading && <Loader /> }
  </Box>
  )
}

export default Users;
