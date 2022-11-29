import React from 'react';
import './Home.css';
import { Box, Button, Grid, Paper } from '@material-ui/core';

function Home(){
  return(
    <>
      <Paper>
        <Box p={2}>
          <Box display="flex" justifyContent="center">
            <h1>Titulo</h1>
          </Box>
          <Box display="flex" justifyContent="center" p={2}>
            <Button variant="contained" color="primary">texto 1</Button>
            <Button variant="contained" color="primary">texto 2</Button>
          </Box>
        </Box>
      </Paper>
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