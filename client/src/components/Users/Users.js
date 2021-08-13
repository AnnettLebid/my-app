import React, { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import AddButton from '../AddButton/AddButton';
import Form from '../Form/Form';

import { Box } from '@material-ui/core';
import useStyles from './styles';

const Users = () => {
  const [formPopup, setFormPopup] = useState(false);
  const classes = useStyles();

  const showFormPopup = () => {
    setFormPopup(prev => !prev);
  }

  return (
    <Box className={classes.boxContainer}>
      <SearchBox />
      <AddButton name={`+  New User`} showFormPopup={showFormPopup} formPopup={formPopup}/>
      {formPopup && <Form showFormPopup={showFormPopup}/>}
    </Box>
  )
}

export default Users;
