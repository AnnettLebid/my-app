import React from 'react';
import { Typography, Box } from '@material-ui/core';
import logo from '../../img/logoCelsius.png'; 


import useStyles from './styles';

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBarContainer}>
      <div className={classes.sideBar}>
        <Box className={classes.sideBarLogo}>
          <img src={logo} alt="Logo" />
        </Box>
        <Typography className={classes.sideBarText}>MyApp</Typography>
      </div>
      <div className={classes.topBar}>
      <Typography className={classes.topBarText}>User Management</Typography>
      </div>
    </div>
  );
}


export default AppBar;