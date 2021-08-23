import React from 'react';
import useStyles from './styles';

const Button = (props) => {   
  const classes = useStyles();
  let { children, iconName } = props;
  return (
    <button className={classes.button}>          
      { iconName ?  iconName :  '' }
      { children ? <span className="label">{children}</span> : '' }
    </button>
  );
}


export default Button;
