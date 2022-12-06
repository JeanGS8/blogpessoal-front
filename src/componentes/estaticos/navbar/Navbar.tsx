import React from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage';

function Navbar(){

  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');

  function goLogout(){
    setToken('');
    alert('usuário deslogado!');

    navigate('/login');
  }


  // Tollbar = barra de menu
  // Box = itens do container
  // Typography = cria uma tag com as informações que eu passar
  return(
    <>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Box className='cursor'>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="start">
            <Link className='text-decorator-none' to='/home'>
              <Box mx={1}  className='cursor'>
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            
            <Link className='text-decorator-none' to='/posts'>
              <Box mx={1}  className='cursor'>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>
            
            <Link className='text-decorator-none' to='/temas'>
              <Box mx={1}  className='cursor'>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>
            
            <Link className='text-decorator-none' to='/formularioTema'>
              <Box mx={1}  className='cursor'>
                <Typography variant="h6" color="inherit">
                  Cadastrar tema
                </Typography>
              </Box>
            </Link>

            <Box mx={1}  className='cursor' onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                Logout
              </Typography>
            </Box>
            
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export { Navbar };