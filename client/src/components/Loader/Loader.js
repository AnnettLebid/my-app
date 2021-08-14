import React from 'react';
import useStyles from './styles';

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.loader}>
     <i className="fa-li fa fa-spinner fa-spin fa-4x "></i>
    </div>
  );
}

export default Loader;