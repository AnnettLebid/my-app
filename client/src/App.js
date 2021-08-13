import React from 'react';
import AppBar from './components/AppBar/AppBar';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import { Container } from '@material-ui/core';

import useStyles from './styles';

const App = () => {  
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <Container maxWidth="lg" className={classes.mainContainer}>
        <Header />
        <Users />
      </Container>      
    </div>
  );
}

export default App;
