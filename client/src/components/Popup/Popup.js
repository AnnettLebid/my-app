import React from 'react';
import { Typography, Box } from '@material-ui/core'
import useStyles from './styles';

const Popup = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.popupTextWrapper}>
        <Typography className={classes.popupText}>Are you sure you want to delete this user ?</Typography>
      </Box>
      <Box className={classes.buttonsWrapper}>
        <button className={classes.submitButton}>Yes</button>
        <button className={classes.submitButton}>No</button>
      </Box>
    </Box>
  )
}

export default Popup;
