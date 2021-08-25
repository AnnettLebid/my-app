import React from 'react';
import useStyles from './styles';

const Button = (props) => {   
  const classes = useStyles();
  let { children, iconName, handleClick } = props;
  return (
    <button 
      className={classes.button}
      onClick={handleClick}>          
      { iconName ?  iconName :  '' }
      { children ? <span className="label">{children}</span> : '' }      
    </button>
  );
}


export default Button;
