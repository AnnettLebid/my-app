import React from 'react';
import useStyles from './styles';

const AddButton = (props) => {
  const { name } = props;
  
  const classes = useStyles();
 
  return (
    <button variant="contained" color="primary" className={classes.addUserButton}>{name}</button>
  )
}

export default AddButton;
