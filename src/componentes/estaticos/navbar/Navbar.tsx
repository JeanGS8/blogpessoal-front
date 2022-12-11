import React, { useState } from 'react';
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux'
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function Navbar(){

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  )

  const dispatch = useDispatch();

  function goLogout(){
    dispatch(addToken(''))
    toast.info('Usuário deslogado', {
      position: 'top-right', // position? topo direita
      autoClose: 2000, // Fechar automaticamente? após 2 segundos
      hideProgressBar: false, // não mostrar o progresso? mostrar
      closeOnClick: true, // fechar após o click? sim
      pauseOnHover: false, // pausar quando o usuário mover o mouse? não
      draggable: false, // permitir mover a notificação do local? não
      theme: 'light', // tema? light
      progress: undefined // 
    });
    navigate('/login');
  }

  var navBarComponent;

  if(token != ''){
    navBarComponent = <AppBar position="static">
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
  }

  // Tollbar = barra de menu
  // Box = itens do container
  // Typography = cria uma tag com as informações que eu passar
  return(
    <>
      {navBarComponent}
    </>
  );
}

export { Navbar };