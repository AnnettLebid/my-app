import React from 'react';
import { Typography, Box } from '@material-ui/core'
import CloseButton from '../CloseButton/CloseButton';
import useStyles from './styles';

const Popup = (props) => {
  const {message} = props;
  // const Popup = ({ showPopup, hidePopup, confirmPopup, id, message }) => {
  const classes = useStyles();
  console.log(message)

  const hidePopup = () => {}

  const confirmPopup = () => {}
  // Are you sure you want to delete this user ?

  const hideConfirmPopup = () => {}

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.closeButton}>
        <CloseButton/>
      </Box>
      <Box className={classes.popupTextWrapper}>
        <Typography className={classes.popupText}>Are you sure you want to delete this user?</Typography>
      </Box>
      <Box className={classes.buttonsWrapper}>
        <button className={classes.submitButton} onClick={() => confirmPopup }>Yes</button>
        <button className={classes.submitButton} onClick={hidePopup}>No</button>
      </Box>
    </Box>
  )
}

export default Popup;
