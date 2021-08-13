import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import AddButton from '../AddButton/AddButton';

import { Box } from '@material-ui/core';
import useStyles from './styles';

const Users = () => {
  const classes = useStyles();

  return (
    <Box className={classes.boxContainer}>
      <SearchBox />
      <AddButton name={`+  New User`} />
    </Box>
  )
}

export default Users;
