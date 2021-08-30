import React from 'react';
import { Typography, Box } from '@material-ui/core'
import CloseButton from '../CloseButton/CloseButton';
import useStyles from './styles';

const Popup = ({ hidePopup, confirmPopup }) => {  
  const classes = useStyles();  

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.closeButton}>
        <CloseButton handleClick={hidePopup}/>
      </Box>
      <Box className={classes.popupTextWrapper}>
        <Typography className={classes.popupText}>Are you sure you want to delete this user?</Typography>
      </Box>
      <Box className={classes.buttonsWrapper}>
        <button className={classes.submitButton} onClick={confirmPopup}>Yes</button>
        <button className={classes.submitButton} onClick={hidePopup}>No</button>
      </Box>
    </Box>
  )
}

export default Popup;
