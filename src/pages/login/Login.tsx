import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import './Login.css';

function Login(){
  return(
    <>
      <Grid container>
        <Grid item xs={6}>
          <Box>
            <form action=""></form>
          </Box>
        </Grid>
        <Grid item xs={6}>
        </Grid>
      </Grid>
    </>
  );
}

export { Login };