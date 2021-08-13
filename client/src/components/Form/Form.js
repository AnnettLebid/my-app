import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const [userData, setUserData] = useState({    
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    permission: '',
  });

  const classes = useStyles();

  const currentId = true;

  const handleSubmit = () => {}

  return (
    <Paper className={classes.paper} elevation={0}>
      <Box className={classes.box}>
        <Typography className={classes.paperHeader}>{currentId ? `Add a new User` : `Modify User`}</Typography>       
      </Box>
      <Box className={classes.borderBox}></Box>  
      <form 
        autoComplete="off" 
        noValidate 
        className={classes.form}
        onSubmit={handleSubmit}>
        <Box className={classes.inputWrapper}>
          <Box className={classes.typographyWrapper}>
            <Typography className={classes.typography}>First Name</Typography>
          </Box>    
          <input 
          name="firstName" 
          variant="outlined"           
          className={classes.inputfield}          
          onChange={(e) => setUserData({ firstName: e.target.value })}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <Box className={classes.typographyWrapper}>
            <Typography className={classes.typography}>Last Name</Typography>
          </Box>      
          <input 
            name="lastName" 
            variant="outlined"            
            className={classes.inputfield}       
            onChange={(e) => setUserData({ lastName: e.target.value })}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <Box className={classes.typographyWrapper}>
            <Typography className={classes.typography}>Email</Typography>
          </Box>     
          <input 
            name="email" 
            variant="outlined"            
            className={classes.inputfield}           
            onChange={(e) => setUserData({  email: e.target.value })}
          />
        </Box>
        <Box className={classes.inputWrapper}>
          <Box className={classes.typographyWrapper}>
            <Typography className={classes.typography}>Location</Typography>
          </Box>     
          <input 
          name="location" 
          variant="outlined"          
          className={classes.inputfield}   
          onChange={(e) => setUserData({  location: e.target.value })}
        />
        </Box>
        <Box className={classes.inputWrapper}>
          <Box className={classes.typographyWrapper}>
            <Typography className={classes.typography}>Permission</Typography>
          </Box>     
          <input 
          name="permission" 
          variant="outlined"        
          className={`${classes.inputfield} ${classes.permission}`}  
          onChange={(e) => setUserData({  permission: e.target.value })}
          />
        </Box>    
        <Box className={classes.buttonBox}>   
          <Button 
            className={classes.buttonSubmit} 
            variant="contained" 
            size="large" 
            type="submit"
            fullWidth
            >Submit
          </Button> 
        </Box>        
      </form>
    </Paper>
  )
}

export default Form;
