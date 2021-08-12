import React from '@babel/template';
import { Box, Typography } from "@material-ui/core";
import useStyles from './styles';

export default function Header() {  
  const classes = useStyles();

  return (
    <Box>   
      <Typography className={classes.hero} color="secondary">User Management</Typography>     
    </Box>
  );
}