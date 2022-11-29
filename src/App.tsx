import React from 'react';
import { Grid } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
import { Home } from './componentes/home/Home';

function App() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Home/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
