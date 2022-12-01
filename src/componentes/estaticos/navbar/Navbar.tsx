import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@material-ui/core';

function Navbar(){
  return(
    <>
      <AppBar position="static">
        <Toolbar variant='dense'>
          <Box style={{cursor: "pointer"}}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            
            <Box mx={1} style={{cursor: "pointer"}}>
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export { Navbar };