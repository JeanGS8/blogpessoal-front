import React from 'react';
import './Home.css';
import { Box, Button, Grid, Paper } from '@material-ui/core';

function Home(){
  return(
    <>
      <h1>Home</h1>
    </>
  );
}

//<h1 className='titulo'>Home</h1>
//<img className='img' src="https://i.imgur.com/H88yIo2.png" alt="Imagem Tela Inicial"/>

/*
<Grid container spacing={2}>
  <Grid xs={12} sm={8}>
    <Paper style={{ height: "100vh", background: "lightgrey" }}/>
  </Grid>
  <Grid item container direction='column' xs={12} sm={4} spacing={2}>
    <Grid item>
    <Paper style={{ height: "49vh", background: "orange" }}/>
    </Grid>
    <Grid item>
    <Paper style={{ height: "49vh", background: "green" }}/>
    </Grid>
  </Grid>
</Grid>
*/
export { Home };