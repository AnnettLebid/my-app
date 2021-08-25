import React from 'react';
import useStyles from './styles';

const CloseButton = ({handleClick}) => {
  const classes = useStyles();
  return (
    <svg 
      onClick={handleClick}
      className={classes.closeButton}
      width="17" 
      height="17" 
      viewBox="0 0 17 17" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16 1L1 15.9797" 
        stroke="white" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M1 1L16 15.9797" 
        stroke="white" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CloseButton;
