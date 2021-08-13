import React from 'react';
import useStyles from './styles';

const AddButton = ({ name, showFormPopup }) => { 
  
  const classes = useStyles();
 
  return (
    <button variant="contained"
      className={classes.addUserButton}
      onClick={showFormPopup}
      >{name}
    </button>
  )
}

export default AddButton;
