import React from 'react';
import AppBar from './components/AppBar/AppBar';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import AddButton from './components/AddButton/AddButton';
import { Container, Box } from '@material-ui/core';

import useStyles from './styles';



const App = () => {  
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Header />
        <Box className={classes.boxContainer}>       
        <SearchBox />
        <AddButton name={`+  New User`}/>
        </Box>
      </Container>      
    </div>
  );
}

export default App;
