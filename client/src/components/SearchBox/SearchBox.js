import React from 'react';
import useStyles from './styles';


const SearchBox = () => {
  const classes = useStyles();

  return (      
    <form>
      <input type="text" placeholder="Search items" className={classes.searchInput}/>  
    </form>  
  )
}

export default SearchBox;
