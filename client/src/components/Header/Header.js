import React from '@babel/template';
import { Box, Typography } from "@material-ui/core";
import useStyles from './styles';

const Header = () => {  
  const classes = useStyles();

  return (
    <Box className={classes.heroWrapper}>   
      <Typography className={classes.hero} color="secondary">User Management</Typography>     
    </Box>
  );
};

export default Header;